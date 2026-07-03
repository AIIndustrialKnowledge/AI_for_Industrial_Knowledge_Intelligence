package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.PlantZone;
import com.aiindustrial.backend.repository.PlantZoneRepository;

@Service
public class PlantZoneService {

    private final PlantZoneRepository repository;

    public PlantZoneService(PlantZoneRepository repository) {
        this.repository = repository;
    }

    public PlantZone saveZone(PlantZone zone) {
        return repository.save(zone);
    }

    public List<PlantZone> getAllZones() {
        return repository.findAll();
    }

    public PlantZone getZone(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Zone Not Found"));
    }

    public PlantZone updateZone(Long id, PlantZone updatedZone) {

        PlantZone zone = getZone(id);

        zone.setZoneName(updatedZone.getZoneName());
        zone.setZoneType(updatedZone.getZoneType());
        zone.setRiskLevel(updatedZone.getRiskLevel());
        zone.setStatus(updatedZone.getStatus());
        zone.setDescription(updatedZone.getDescription());

        return repository.save(zone);
    }

    public void deleteZone(Long id) {
        repository.deleteById(id);
    }
}