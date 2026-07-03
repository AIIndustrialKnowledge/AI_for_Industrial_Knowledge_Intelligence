package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aiindustrial.backend.entity.Incident;
import com.aiindustrial.backend.service.IncidentService;

@RestController
@CrossOrigin(origins="*")
public class IncidentController {

    private final IncidentService incidentService;

    public IncidentController(IncidentService incidentService) {
        this.incidentService = incidentService;
    }

    @GetMapping("/incidents")
    public List<Incident> getIncidents() {
        return incidentService.getAllIncidents();
    }
}