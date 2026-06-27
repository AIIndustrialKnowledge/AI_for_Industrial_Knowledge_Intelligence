package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.Equipment;
import com.aiindustrial.backend.service.EquipmentService;

@RestController
@RequestMapping("/equipment")
@CrossOrigin(origins = "*")
public class EquipmentController {

    private final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Equipment saveEquipment(@RequestBody Equipment equipment) {
        return equipmentService.saveEquipment(equipment);
    }

    @GetMapping
    public List<Equipment> getAllEquipment() {
        return equipmentService.getAllEquipment();
    }

    @GetMapping("/{id}")
    public Equipment getEquipmentById(@PathVariable Long id) {
        return equipmentService.getEquipmentById(id);
    }

    @PutMapping("/{id}")
    public Equipment updateEquipment(@PathVariable Long id,
                                     @RequestBody Equipment equipment) {
        return equipmentService.updateEquipment(id, equipment);
    }

    @DeleteMapping("/{id}")
    public String deleteEquipment(@PathVariable Long id) {

        equipmentService.deleteEquipment(id);

        return "Equipment Deleted Successfully";
    }

}