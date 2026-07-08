package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.RiskPrediction;
import com.aiindustrial.backend.service.RiskPredictionService;

@RestController
@RequestMapping("/risk-predictions")
@CrossOrigin(origins = "*")
public class RiskPredictionController {

    private final RiskPredictionService service;

    public RiskPredictionController(RiskPredictionService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RiskPrediction save(@RequestBody RiskPrediction prediction) {
        return service.savePrediction(prediction);
    }

    @GetMapping
    public List<RiskPrediction> getAll() {
        return service.getAllPredictions();
    }

    @GetMapping("/{id}")
    public RiskPrediction getOne(@PathVariable Long id) {
        return service.getPrediction(id);
    }

    @PutMapping("/{id}")
    public RiskPrediction update(@PathVariable Long id,
            @RequestBody RiskPrediction prediction) {
        return service.updatePrediction(id, prediction);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.deletePrediction(id);

        return "Risk Prediction Deleted Successfully";
    }
}