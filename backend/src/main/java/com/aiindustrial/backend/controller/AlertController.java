package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.Alert;
import com.aiindustrial.backend.service.AlertService;

@RestController
@RequestMapping("/alerts")
@CrossOrigin(origins = "*")
public class AlertController {

    private final AlertService alertService;

    public AlertController(AlertService alertService) {
        this.alertService = alertService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Alert save(@RequestBody Alert alert) {
        return alertService.saveAlert(alert);
    }

    @GetMapping
    public List<Alert> getAll() {
        return alertService.getAllAlerts();
    }

    @GetMapping("/{id}")
    public Alert getOne(@PathVariable Long id) {
        return alertService.getAlert(id);
    }

    @PutMapping("/{id}")
    public Alert update(@PathVariable Long id,
            @RequestBody Alert alert) {
        return alertService.updateAlert(id, alert);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        alertService.deleteAlert(id);

        return "Alert Deleted Successfully";
    }
}