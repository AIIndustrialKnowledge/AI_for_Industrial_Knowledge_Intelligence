package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aiindustrial.backend.entity.RiskPrediction;
import com.aiindustrial.backend.service.RiskPredictionService;

@RestController
@CrossOrigin(origins="*")
public class RiskPredictionController {

    private final RiskPredictionService riskPredictionService;

    public RiskPredictionController(RiskPredictionService riskPredictionService) {
        this.riskPredictionService = riskPredictionService;
    }

    @GetMapping("/risk-predictions")
    public List<RiskPrediction> getRiskPredictions() {
        return riskPredictionService.getAllPredictions();
    }
}