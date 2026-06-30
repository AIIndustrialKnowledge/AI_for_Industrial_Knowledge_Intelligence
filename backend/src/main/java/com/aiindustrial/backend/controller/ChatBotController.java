package com.aiindustrial.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.dto.ChatRequest;
import com.aiindustrial.backend.dto.ChatResponse;
import com.aiindustrial.backend.service.ChatBotService;

@RestController
@RequestMapping("/chat")
@CrossOrigin("*")
public class ChatBotController {

    private final ChatBotService chatBotService;

    public ChatBotController(ChatBotService chatBotService) {
        this.chatBotService = chatBotService;
    }

    @PostMapping
    public ChatResponse ask(@RequestBody ChatRequest request) {

        String answer = chatBotService.getAnswer(request.getQuestion());

        return new ChatResponse(answer);

    }

}