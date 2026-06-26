package com.aiindustrial.backend.repository;

import com.aiindustrial.backend.entity.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SensorRepository extends JpaRepository<Sensor, Long> {

}