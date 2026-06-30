package com.aiindustrial.backend.dto;

public class DashboardResponse {

    private long totalWorkers;
    private long totalSensors;
    private long totalEquipment;
    private long totalAlerts;
    private long totalIncidents;
    private long totalRiskPredictions;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalWorkers,
                             long totalSensors,
                             long totalEquipment,
                             long totalAlerts,
                             long totalIncidents,
                             long totalRiskPredictions) {

        this.totalWorkers = totalWorkers;
        this.totalSensors = totalSensors;
        this.totalEquipment = totalEquipment;
        this.totalAlerts = totalAlerts;
        this.totalIncidents = totalIncidents;
        this.totalRiskPredictions = totalRiskPredictions;
    }

    public long getTotalWorkers() {
        return totalWorkers;
    }

    public void setTotalWorkers(long totalWorkers) {
        this.totalWorkers = totalWorkers;
    }

    public long getTotalSensors() {
        return totalSensors;
    }

    public void setTotalSensors(long totalSensors) {
        this.totalSensors = totalSensors;
    }

    public long getTotalEquipment() {
        return totalEquipment;
    }

    public void setTotalEquipment(long totalEquipment) {
        this.totalEquipment = totalEquipment;
    }

    public long getTotalAlerts() {
        return totalAlerts;
    }

    public void setTotalAlerts(long totalAlerts) {
        this.totalAlerts = totalAlerts;
    }

    public long getTotalIncidents() {
        return totalIncidents;
    }

    public void setTotalIncidents(long totalIncidents) {
        this.totalIncidents = totalIncidents;
    }

    public long getTotalRiskPredictions() {
        return totalRiskPredictions;
    }

    public void setTotalRiskPredictions(long totalRiskPredictions) {
        this.totalRiskPredictions = totalRiskPredictions;
    }

}