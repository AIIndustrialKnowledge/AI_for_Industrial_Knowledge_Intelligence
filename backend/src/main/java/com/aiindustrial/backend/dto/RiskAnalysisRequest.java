package com.aiindustrial.backend.dto;

public class RiskAnalysisRequest {

    private double gasLevel;
    private double temperature;
    private double humidity;
    private String permitType;
    private int workersPresent;

    public RiskAnalysisRequest() {
    }

    public RiskAnalysisRequest(double gasLevel, double temperature,
                               double humidity, String permitType,
                               int workersPresent) {
        this.gasLevel = gasLevel;
        this.temperature = temperature;
        this.humidity = humidity;
        this.permitType = permitType;
        this.workersPresent = workersPresent;
    }

    public double getGasLevel() {
        return gasLevel;
    }

    public void setGasLevel(double gasLevel) {
        this.gasLevel = gasLevel;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public double getHumidity() {
        return humidity;
    }

    public void setHumidity(double humidity) {
        this.humidity = humidity;
    }

    public String getPermitType() {
        return permitType;
    }

    public void setPermitType(String permitType) {
        this.permitType = permitType;
    }

    public int getWorkersPresent() {
        return workersPresent;
    }

    public void setWorkersPresent(int workersPresent) {
        this.workersPresent = workersPresent;
    }
}