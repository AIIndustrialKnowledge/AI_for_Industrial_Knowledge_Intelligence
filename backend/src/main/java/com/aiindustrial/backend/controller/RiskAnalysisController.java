package com.aiindustrial.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.ai.RiskAnalysisService;
import com.aiindustrial.backend.dto.RiskAnalysisRequest;
import com.aiindustrial.backend.dto.RiskAnalysisResponse;

@RestController
@RequestMapping("/risk")
@CrossOrigin(origins = "*")
public class RiskAnalysisController {

    private final RiskAnalysisService riskAnalysisService;

    public RiskAnalysisController(RiskAnalysisService riskAnalysisService) {
        this.riskAnalysisService = riskAnalysisService;
    }

    @PostMapping("/analyze")
    public RiskAnalysisResponse analyzeRisk(@RequestBody RiskAnalysisRequest request) {

        return riskAnalysisService.analyzeRisk(request);

    }
}