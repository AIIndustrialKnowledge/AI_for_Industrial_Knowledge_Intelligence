package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.RiskPrediction;
import com.aiindustrial.backend.repository.RiskPredictionRepository;

@Service
public class RiskPredictionService {

    private final RiskPredictionRepository repository;

    public RiskPredictionService(RiskPredictionRepository repository) {
        this.repository = repository;
    }

    public RiskPrediction savePrediction(RiskPrediction prediction) {
        return repository.save(prediction);
    }

    public List<RiskPrediction> getAllPredictions() {
        return repository.findAll();
    }

    public RiskPrediction getPrediction(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Risk Prediction Not Found"));
    }

    public RiskPrediction updatePrediction(Long id, RiskPrediction updatedPrediction) {

        RiskPrediction prediction = getPrediction(id);

        prediction.setRiskScore(updatedPrediction.getRiskScore());
        prediction.setRiskLevel(updatedPrediction.getRiskLevel());
        prediction.setRecommendation(updatedPrediction.getRecommendation());
        prediction.setAlertGenerated(updatedPrediction.isAlertGenerated());

        return repository.save(prediction);
    }

    public void deletePrediction(Long id) {
        repository.deleteById(id);
    }
}