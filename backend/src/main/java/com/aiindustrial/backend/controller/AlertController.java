package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.Alert;
import com.aiindustrial.backend.service.AlertService;

@RestController
@CrossOrigin(origins = "*")
public class AlertController {

    private final AlertService alertService;

    public AlertController(AlertService alertService) {
        this.alertService = alertService;
    }

    @GetMapping("/alerts")
    public List<Alert> getAlerts() {
        return alertService.getAllAlerts();
    }

    // NEW
    @PostMapping("/alerts")
    public Alert addAlert(@RequestBody Alert alert) {
        return alertService.saveAlert(alert);
    }

    // NEW
    @DeleteMapping("/alerts/{id}")
    public void deleteAlert(@PathVariable Long id) {
        alertService.deleteAlert(id);
    }

}