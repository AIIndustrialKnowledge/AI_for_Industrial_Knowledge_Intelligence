package com.aiindustrial.backend.service;

import org.springframework.stereotype.Service;

@Service
public class ChatBotService {

    private final GeminiService geminiService;

    public ChatBotService(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    public String getAnswer(String question) {

        if (question == null || question.trim().isEmpty()) {
            return "Please ask a valid question.";
        }

        String prompt = """
                You are an AI Industrial Safety Assistant.

                Your responsibilities:
                - Answer only Industrial Safety related questions.
                - Topics include:
                  • Fire Safety
                  • PPE
                  • Gas Leak
                  • Chemical Safety
                  • Electrical Safety
                  • Worker Safety
                  • Confined Space
                  • Machine Safety
                  • Emergency Response
                  • Industrial Accidents
                  • Plant Safety
                  • Risk Assessment

                If the question is unrelated to industrial safety,
                politely respond:
                "I'm an Industrial Safety AI Assistant. Please ask questions related to industrial safety."

                User Question:
                """ + question;

        return geminiService.askGemini(prompt);
    }
}