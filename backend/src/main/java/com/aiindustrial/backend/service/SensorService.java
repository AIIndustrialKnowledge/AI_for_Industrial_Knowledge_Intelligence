package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.Sensor;
import com.aiindustrial.backend.repository.SensorRepository;

@Service
public class SensorService {

    private final SensorRepository sensorRepository;

    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public Sensor saveSensor(Sensor sensor) {
        return sensorRepository.save(sensor);
    }

    public List<Sensor> getAllSensors() {
        return sensorRepository.findAll();
    }

    public Sensor getSensorById(Long id) {
        return sensorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sensor Not Found"));
    }

    public Sensor updateSensor(Long id, Sensor updatedSensor) {

        Sensor sensor = getSensorById(id);

        sensor.setSensorName(updatedSensor.getSensorName());
        sensor.setSensorType(updatedSensor.getSensorType());
        sensor.setZone(updatedSensor.getZone());
        sensor.setStatus(updatedSensor.getStatus());

        return sensorRepository.save(sensor);
    }

    public void deleteSensor(Long id) {
        sensorRepository.deleteById(id);
    }

}