package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.SensorReading;
import com.aiindustrial.backend.repository.SensorReadingRepository;

@Service
public class SensorReadingService {

    private final SensorReadingRepository sensorReadingRepository;

    public SensorReadingService(SensorReadingRepository sensorReadingRepository) {
        this.sensorReadingRepository = sensorReadingRepository;
    }

    public SensorReading saveReading(SensorReading reading) {
        return sensorReadingRepository.save(reading);
    }

    public List<SensorReading> getAllReadings() {
        return sensorReadingRepository.findAll();
    }

    public SensorReading getReading(Long id) {
        return sensorReadingRepository.findById(id).orElse(null);
    }

    public SensorReading updateReading(Long id, SensorReading reading) {

        SensorReading existing = getReading(id);

        if (existing != null) {
            existing.setGasLevel(reading.getGasLevel());
            existing.setTemperature(reading.getTemperature());
            existing.setHumidity(reading.getHumidity());
            existing.setZone(reading.getZone());

            return sensorReadingRepository.save(existing);
        }

        return null;
    }

    public void deleteReading(Long id) {
        sensorReadingRepository.deleteById(id);
    }
}