package com.aiindustrial.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "workers")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workerId;

    private String workerName;

    private String department;

    private String shift;

    private String location;

    private boolean helmetWorn;

    public Worker() {
    }

    public Worker(Long workerId, String workerName, String department,
            String shift, String location, boolean helmetWorn) {
        this.workerId = workerId;
        this.workerName = workerName;
        this.department = department;
        this.shift = shift;
        this.location = location;
        this.helmetWorn = helmetWorn;
    }

    public Long getWorkerId() {
        return workerId;
    }

    public void setWorkerId(Long workerId) {
        this.workerId = workerId;
    }

    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getShift() {
        return shift;
    }

    public void setShift(String shift) {
        this.shift = shift;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isHelmetWorn() {
        return helmetWorn;
    }

    public void setHelmetWorn(boolean helmetWorn) {
        this.helmetWorn = helmetWorn;
    }
}