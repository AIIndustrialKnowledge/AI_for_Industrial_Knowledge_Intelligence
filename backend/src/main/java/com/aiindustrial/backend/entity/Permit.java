package com.aiindustrial.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "permits")
public class Permit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long permitId;

    private String permitType;

    private String workerName;

    private String location;

    private String status;

    public Permit() {
    }

    public Permit(Long permitId, String permitType, String workerName,
                  String location, String status) {
        this.permitId = permitId;
        this.permitType = permitType;
        this.workerName = workerName;
        this.location = location;
        this.status = status;
    }

    public Long getPermitId() {
        return permitId;
    }

    public void setPermitId(Long permitId) {
        this.permitId = permitId;
    }

    public String getPermitType() {
        return permitType;
    }

    public void setPermitType(String permitType) {
        this.permitType = permitType;
    }

    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}