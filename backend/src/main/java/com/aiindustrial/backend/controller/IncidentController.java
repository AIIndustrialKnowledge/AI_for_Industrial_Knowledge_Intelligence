package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.aiindustrial.backend.entity.Incident;
import com.aiindustrial.backend.service.IncidentService;

@RestController
@RequestMapping("/incidents")
@CrossOrigin(origins = "*")
public class IncidentController {

    private final IncidentService incidentService;

    public IncidentController(IncidentService incidentService) {
        this.incidentService = incidentService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Incident save(@RequestBody Incident incident) {
        return incidentService.saveIncident(incident);
    }

    @GetMapping
    public List<Incident> getAll() {
        return incidentService.getAllIncidents();
    }

    @GetMapping("/{id}")
    public Incident getOne(@PathVariable Long id) {
        return incidentService.getIncident(id);
    }

    @PutMapping("/{id}")
    public Incident update(@PathVariable Long id,

            @RequestBody Incident incident) {

        return incidentService.updateIncident(id, incident);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        incidentService.deleteIncident(id);

        return "Incident Deleted Successfully";
    }
}