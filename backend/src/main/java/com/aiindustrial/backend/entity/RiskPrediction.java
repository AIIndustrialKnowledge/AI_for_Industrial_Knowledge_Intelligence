package com.aiindustrial.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "risk_predictions")
public class RiskPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long predictionId;

    private int riskScore;

    private String riskLevel;

    private String recommendation;

    private boolean alertGenerated;

    public RiskPrediction() {
    }

    public RiskPrediction(Long predictionId, int riskScore,
                          String riskLevel,
                          String recommendation,
                          boolean alertGenerated) {

        this.predictionId = predictionId;
        this.riskScore = riskScore;
        this.riskLevel = riskLevel;
        this.recommendation = recommendation;
        this.alertGenerated = alertGenerated;
    }

    public Long getPredictionId() {
        return predictionId;
    }

    public void setPredictionId(Long predictionId) {
        this.predictionId = predictionId;
    }

    public int getRiskScore() {
        return riskScore;
    }

    public void setRiskScore(int riskScore) {
        this.riskScore = riskScore;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public boolean isAlertGenerated() {
        return alertGenerated;
    }

    public void setAlertGenerated(boolean alertGenerated) {
        this.alertGenerated = alertGenerated;
    }
}