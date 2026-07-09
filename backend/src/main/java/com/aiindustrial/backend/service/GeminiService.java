package com.aiindustrial.backend.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient = WebClient.builder().build();

    public String askGemini(String question) {

        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="
                + apiKey;

        Map<String, Object> body = Map.of(
                "contents",
                List.of(
                        Map.of(
                                "parts",
                                List.of(
                                        Map.of("text", question)))));

        try {

            Map response = webClient.post()
                    .uri(url)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            List candidates = (List) response.get("candidates");

            if (candidates == null || candidates.isEmpty()) {
                return "No response from Gemini.";
            }

            Map candidate = (Map) candidates.get(0);

            Map content = (Map) candidate.get("content");

            List parts = (List) content.get("parts");

            Map part = (Map) parts.get(0);

            return part.get("text").toString();

        } catch (Exception e) {

            e.printStackTrace();

            return "Unable to connect to Gemini AI.";

        }

    }

}