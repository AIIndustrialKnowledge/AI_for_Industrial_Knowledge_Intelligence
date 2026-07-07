package com.aiindustrial.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "sensor_readings")
public class SensorReading {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long readingId;

    private double gasLevel;

    private double temperature;

    private double humidity;

    private String zone;

    public SensorReading() {
    }

    public SensorReading(Long readingId, double gasLevel,
                         double temperature, double humidity,
                         String zone) {
        this.readingId = readingId;
        this.gasLevel = gasLevel;
        this.temperature = temperature;
        this.humidity = humidity;
        this.zone = zone;
    }

    public Long getReadingId() {
        return readingId;
    }

    public void setReadingId(Long readingId) {
        this.readingId = readingId;
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

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }
}