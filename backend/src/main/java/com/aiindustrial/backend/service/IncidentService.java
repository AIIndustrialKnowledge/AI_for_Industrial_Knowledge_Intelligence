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

    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    public Incident saveIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    public Incident getIncident(Long id) {
        return incidentRepository.findById(id).orElse(null);
    }

    public Incident updateIncident(Long id, Incident incident) {

        Incident existing = getIncident(id);

        if (existing != null) {

            existing.setIncidentType(incident.getIncidentType());
            existing.setSeverity(incident.getSeverity());
            existing.setLocation(incident.getLocation());
            existing.setDescription(incident.getDescription());
            existing.setStatus(incident.getStatus());

            return incidentRepository.save(existing);
        }

        return null;
    }

    public void deleteIncident(Long id) {
        incidentRepository.deleteById(id);
    }

}