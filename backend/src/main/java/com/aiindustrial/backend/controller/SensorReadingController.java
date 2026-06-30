package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.SensorReading;
import com.aiindustrial.backend.service.SensorReadingService;

@RestController
@RequestMapping("/sensor-readings")
@CrossOrigin("*")
public class SensorReadingController {

    private final SensorReadingService service;

    public SensorReadingController(SensorReadingService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SensorReading save(@RequestBody SensorReading reading) {
        return service.saveReading(reading);
    }

    @GetMapping
    public List<SensorReading> getAll() {
        return service.getAllReadings();
    }

    @GetMapping("/{id}")
    public SensorReading getOne(@PathVariable Long id) {
        return service.getReading(id);
    }

    @PutMapping("/{id}")
    public SensorReading update(@PathVariable Long id,
                                @RequestBody SensorReading reading) {
        return service.updateReading(id, reading);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.deleteReading(id);

        return "Sensor Reading Deleted Successfully";
    }
}