package com.aiindustrial.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aiindustrial.backend.entity.RiskPrediction;

@Repository
public interface RiskPredictionRepository
        extends JpaRepository<RiskPrediction, Long> {

}