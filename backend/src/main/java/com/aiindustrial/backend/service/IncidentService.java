package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.Incident;
import com.aiindustrial.backend.repository.IncidentRepository;

@Service
public class IncidentService {

    private final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    public Incident saveIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    public Incident getIncident(Long id) {
        return incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incident Not Found"));
    }

    public Incident updateIncident(Long id, Incident updatedIncident) {

        Incident incident = getIncident(id);

        incident.setIncidentType(updatedIncident.getIncidentType());
        incident.setSeverity(updatedIncident.getSeverity());
        incident.setLocation(updatedIncident.getLocation());
        incident.setDescription(updatedIncident.getDescription());
        incident.setStatus(updatedIncident.getStatus());

        return incidentRepository.save(incident);
    }

    public void deleteIncident(Long id) {
        incidentRepository.deleteById(id);
    }
}