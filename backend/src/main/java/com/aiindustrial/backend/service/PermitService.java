package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.Permit;
import com.aiindustrial.backend.repository.PermitRepository;

@Service
public class PermitService {

    private final PermitRepository permitRepository;

    public PermitService(PermitRepository permitRepository) {
        this.permitRepository = permitRepository;
    }

    public Permit savePermit(Permit permit) {
        return permitRepository.save(permit);
    }

    public List<Permit> getAllPermits() {
        return permitRepository.findAll();
    }

    public Permit getPermit(Long id) {
        return permitRepository.findById(id).orElse(null);
    }

    public Permit updatePermit(Long id, Permit permit) {

        Permit existing = getPermit(id);

        if (existing != null) {
            existing.setPermitType(permit.getPermitType());
            existing.setWorkerName(permit.getWorkerName());
            existing.setLocation(permit.getLocation());
            existing.setStatus(permit.getStatus());

            return permitRepository.save(existing);
        }

        return null;
    }

    public void deletePermit(Long id) {
        permitRepository.deleteById(id);
    }

}