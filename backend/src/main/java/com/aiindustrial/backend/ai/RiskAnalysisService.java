package com.aiindustrial.backend.ai;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.dto.RiskAnalysisRequest;
import com.aiindustrial.backend.dto.RiskAnalysisResponse;
import com.aiindustrial.backend.entity.RiskPrediction;
import com.aiindustrial.backend.repository.RiskPredictionRepository;
import com.aiindustrial.backend.entity.Alert;
import com.aiindustrial.backend.repository.AlertRepository;
import com.aiindustrial.backend.entity.Incident;
import com.aiindustrial.backend.repository.IncidentRepository;
@Service
public class RiskAnalysisService {

    private final RiskPredictionRepository riskPredictionRepository;
    private final AlertRepository alertRepository;
    private final IncidentRepository incidentRepository;

    public RiskAnalysisService(
        RiskPredictionRepository riskPredictionRepository,
        AlertRepository alertRepository,
        IncidentRepository incidentRepository) {

    this.riskPredictionRepository = riskPredictionRepository;
    this.alertRepository = alertRepository;
    this.incidentRepository = incidentRepository;
}

    public RiskAnalysisResponse analyzeRisk(RiskAnalysisRequest request) {

        int score = 0;

        if (request.getGasLevel() > 80)
            score += 40;

        if (request.getTemperature() > 50)
            score += 30;

        if ("HOT_WORK".equalsIgnoreCase(request.getPermitType()))
            score += 20;

        if (request.getWorkersPresent() > 5)
            score += 10;

        String riskLevel;
        String recommendation;
        boolean alert;

        if (score >= 80) {
            riskLevel = "CRITICAL";
            recommendation = "Evacuate the affected area immediately.";
            alert = true;
        } else if (score >= 50) {
            riskLevel = "HIGH";
            recommendation = "Notify the safety officer and monitor continuously.";
            alert = true;
        } else if (score >= 25) {
            riskLevel = "MEDIUM";
            recommendation = "Increase monitoring and review safety conditions.";
            alert = false;
        } else {
            riskLevel = "LOW";
            recommendation = "Conditions are normal.";
            alert = false;
        }

        // Save Prediction in Database
        RiskPrediction prediction = new RiskPrediction();

        prediction.setRiskScore(score);
        prediction.setRiskLevel(riskLevel);
        prediction.setRecommendation(recommendation);
        prediction.setAlertGenerated(alert);

        riskPredictionRepository.save(prediction);
        if (alert) {

    Alert alertEntity = new Alert();

    alertEntity.setAlertType("Industrial Safety Alert");
    alertEntity.setSeverity(riskLevel);
    alertEntity.setMessage(recommendation);
    alertEntity.setStatus("ACTIVE");

    alertRepository.save(alertEntity);
    if ("CRITICAL".equals(riskLevel)) {

    Incident incident = new Incident();

    incident.setIncidentType("Industrial Safety Incident");
    incident.setSeverity("CRITICAL");
    incident.setLocation("Plant Zone");
    incident.setDescription(recommendation);
    incident.setStatus("OPEN");

    incidentRepository.save(incident);
}
}

        return new RiskAnalysisResponse(
                riskLevel,
                score,
                recommendation,
                alert
        );
    }
}