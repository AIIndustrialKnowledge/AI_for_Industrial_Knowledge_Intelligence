package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.Sensor;
import com.aiindustrial.backend.service.SensorService;

@RestController
@RequestMapping("/sensors")
@CrossOrigin(origins = "*")
public class SensorController {

    private final SensorService sensorService;

    public SensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Sensor saveSensor(@RequestBody Sensor sensor) {
        return sensorService.saveSensor(sensor);
    }

    @GetMapping
    public List<Sensor> getAllSensors() {
        return sensorService.getAllSensors();
    }

    @GetMapping("/{id}")
    public Sensor getSensorById(@PathVariable Long id) {
        return sensorService.getSensorById(id);
    }

    @PutMapping("/{id}")
    public Sensor updateSensor(@PathVariable Long id,
                               @RequestBody Sensor sensor) {
        return sensorService.updateSensor(id, sensor);
    }

    @DeleteMapping("/{id}")
    public String deleteSensor(@PathVariable Long id) {

        sensorService.deleteSensor(id);

        return "Sensor Deleted Successfully";
    }

}