package com.aiindustrial.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.aiindustrial.backend.entity.Permit;

public interface PermitRepository extends JpaRepository<Permit, Long> {

}