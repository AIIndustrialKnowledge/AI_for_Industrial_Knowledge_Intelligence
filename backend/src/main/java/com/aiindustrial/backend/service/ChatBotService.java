package com.aiindustrial.backend.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.ai.SafetyKnowledgeBase;

@Service
public class ChatBotService {

    public String getAnswer(String question) {

        Map<String, String> knowledge = SafetyKnowledgeBase.getKnowledge();

        String q = question.toLowerCase();

        for (String key : knowledge.keySet()) {

            if (q.contains(key)) {

                return knowledge.get(key);

            }

        }

        return "Sorry, I don't have information about that safety issue. Please contact the safety officer.";

    }

}