package com.aiindustrial.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aiindustrial.backend.entity.PlantZone;

@Repository
public interface PlantZoneRepository extends JpaRepository<PlantZone, Long> {

}