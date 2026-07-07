package com.aiindustrial.backend.dto;

public class RiskAnalysisResponse {

    private String riskLevel;
    private int riskScore;
    private String recommendation;
    private boolean alert;

    public RiskAnalysisResponse() {
    }

    public RiskAnalysisResponse(String riskLevel, int riskScore,
                                String recommendation, boolean alert) {
        this.riskLevel = riskLevel;
        this.riskScore = riskScore;
        this.recommendation = recommendation;
        this.alert = alert;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public int getRiskScore() {
        return riskScore;
    }

    public void setRiskScore(int riskScore) {
        this.riskScore = riskScore;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public boolean isAlert() {
        return alert;
    }

    public void setAlert(boolean alert) {
        this.alert = alert;
    }
}