package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.Equipment;
import com.aiindustrial.backend.repository.EquipmentRepository;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public Equipment saveEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }

    public Equipment getEquipmentById(Long id) {
        return equipmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipment Not Found"));
    }

    public Equipment updateEquipment(Long id, Equipment updatedEquipment) {

        Equipment equipment = getEquipmentById(id);

        equipment.setEquipmentName(updatedEquipment.getEquipmentName());
        equipment.setEquipmentType(updatedEquipment.getEquipmentType());
        equipment.setStatus(updatedEquipment.getStatus());
        equipment.setZone(updatedEquipment.getZone());

        return equipmentRepository.save(equipment);
    }

    public void deleteEquipment(Long id) {
        equipmentRepository.deleteById(id);
    }

}