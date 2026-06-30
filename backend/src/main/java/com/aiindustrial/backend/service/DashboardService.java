package com.aiindustrial.backend.service;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.dto.DashboardResponse;
import com.aiindustrial.backend.repository.AlertRepository;
import com.aiindustrial.backend.repository.EquipmentRepository;
import com.aiindustrial.backend.repository.IncidentRepository;
import com.aiindustrial.backend.repository.RiskPredictionRepository;
import com.aiindustrial.backend.repository.SensorRepository;
import com.aiindustrial.backend.repository.WorkerRepository;

@Service
public class DashboardService {

    private final WorkerRepository workerRepository;
    private final SensorRepository sensorRepository;
    private final EquipmentRepository equipmentRepository;
    private final AlertRepository alertRepository;
    private final IncidentRepository incidentRepository;
    private final RiskPredictionRepository riskPredictionRepository;

    public DashboardService(
            WorkerRepository workerRepository,
            SensorRepository sensorRepository,
            EquipmentRepository equipmentRepository,
            AlertRepository alertRepository,
            IncidentRepository incidentRepository,
            RiskPredictionRepository riskPredictionRepository) {

        this.workerRepository = workerRepository;
        this.sensorRepository = sensorRepository;
        this.equipmentRepository = equipmentRepository;
        this.alertRepository = alertRepository;
        this.incidentRepository = incidentRepository;
        this.riskPredictionRepository = riskPredictionRepository;
    }

    public DashboardResponse getDashboardSummary() {

        DashboardResponse response = new DashboardResponse();

        response.setTotalWorkers(workerRepository.count());
        response.setTotalSensors(sensorRepository.count());
        response.setTotalEquipment(equipmentRepository.count());
        response.setTotalAlerts(alertRepository.count());
        response.setTotalIncidents(incidentRepository.count());
        response.setTotalRiskPredictions(riskPredictionRepository.count());

        return response;
    }

}