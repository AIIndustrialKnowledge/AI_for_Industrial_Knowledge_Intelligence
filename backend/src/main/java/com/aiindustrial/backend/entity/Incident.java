package com.aiindustrial.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "incidents")
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long incidentId;

    private String incidentType;

    private String severity;

    private String location;

    private String description;

    private String status;

    public Incident() {
    }

    public Incident(Long incidentId, String incidentType,
                    String severity, String location,
                    String description, String status) {
        this.incidentId = incidentId;
        this.incidentType = incidentType;
        this.severity = severity;
        this.location = location;
        this.description = description;
        this.status = status;
    }

    public Long getIncidentId() {
        return incidentId;
    }

    public void setIncidentId(Long incidentId) {
        this.incidentId = incidentId;
    }

    public String getIncidentType() {
        return incidentType;
    }

    public void setIncidentType(String incidentType) {
        this.incidentType = incidentType;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}