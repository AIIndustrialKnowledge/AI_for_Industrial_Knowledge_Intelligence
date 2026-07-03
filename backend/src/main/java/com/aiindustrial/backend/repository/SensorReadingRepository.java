package com.aiindustrial.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.aiindustrial.backend.entity.SensorReading;

public interface SensorReadingRepository extends JpaRepository<SensorReading, Long> {

}