package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.RiskPrediction;
import com.aiindustrial.backend.repository.RiskPredictionRepository;

@Service
public class RiskPredictionService {

    private final RiskPredictionRepository riskPredictionRepository;

    public RiskPredictionService(RiskPredictionRepository riskPredictionRepository) {
        this.riskPredictionRepository = riskPredictionRepository;
    }

    public List<RiskPrediction> getAllPredictions() {
        return riskPredictionRepository.findAll();
    }
}