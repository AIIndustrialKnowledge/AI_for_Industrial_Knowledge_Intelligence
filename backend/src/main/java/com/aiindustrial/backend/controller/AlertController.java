package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aiindustrial.backend.entity.Alert;
import com.aiindustrial.backend.service.AlertService;

@RestController
@CrossOrigin(origins="*")
public class AlertController {

    private final AlertService alertService;

    public AlertController(AlertService alertService) {
        this.alertService = alertService;
    }

    @GetMapping("/alerts")
    public List<Alert> getAlerts() {
        return alertService.getAllAlerts();
    }
}