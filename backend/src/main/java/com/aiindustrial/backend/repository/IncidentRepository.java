package com.aiindustrial.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aiindustrial.backend.entity.Incident;

@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {

}