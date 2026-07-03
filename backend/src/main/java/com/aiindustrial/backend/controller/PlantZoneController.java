package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.PlantZone;
import com.aiindustrial.backend.service.PlantZoneService;

@RestController
@RequestMapping("/zones")
@CrossOrigin("*")
public class PlantZoneController {

    private final PlantZoneService service;

    public PlantZoneController(PlantZoneService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PlantZone save(@RequestBody PlantZone zone) {
        return service.saveZone(zone);
    }

    @GetMapping
    public List<PlantZone> getAll() {
        return service.getAllZones();
    }

    @GetMapping("/{id}")
    public PlantZone getOne(@PathVariable Long id) {
        return service.getZone(id);
    }

    @PutMapping("/{id}")
    public PlantZone update(@PathVariable Long id,
                            @RequestBody PlantZone zone) {
        return service.updateZone(id, zone);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.deleteZone(id);

        return "Zone Deleted Successfully";
    }
}