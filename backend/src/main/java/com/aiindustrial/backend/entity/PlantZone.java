package com.aiindustrial.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "plant_zones")
public class PlantZone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long zoneId;

    @Column(nullable = false)
    private String zoneName;

    @Column(nullable = false)
    private String zoneType;

    @Column(nullable = false)
    private String riskLevel;

    @Column(nullable = false)
    private String status;

    private String description;

    public PlantZone() {
    }

    public PlantZone(Long zoneId, String zoneName, String zoneType,
                     String riskLevel, String status, String description) {
        this.zoneId = zoneId;
        this.zoneName = zoneName;
        this.zoneType = zoneType;
        this.riskLevel = riskLevel;
        this.status = status;
        this.description = description;
    }

    public Long getZoneId() {
        return zoneId;
    }

    public void setZoneId(Long zoneId) {
        this.zoneId = zoneId;
    }

    public String getZoneName() {
        return zoneName;
    }

    public void setZoneName(String zoneName) {
        this.zoneName = zoneName;
    }

    public String getZoneType() {
        return zoneType;
    }

    public void setZoneType(String zoneType) {
        this.zoneType = zoneType;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}