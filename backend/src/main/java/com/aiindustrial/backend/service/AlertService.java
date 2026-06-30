package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.Alert;
import com.aiindustrial.backend.repository.AlertRepository;

@Service
public class AlertService {

    private final AlertRepository alertRepository;

    public AlertService(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    public List<Alert> getAllAlerts() {
        return alertRepository.findAll();
    }
}