package com.aiindustrial.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiindustrial.backend.entity.Worker;
import com.aiindustrial.backend.repository.WorkerRepository;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;

    public WorkerService(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    public Worker saveWorker(Worker worker) {
        return workerRepository.save(worker);
    }

    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }

    public Worker getWorkerById(Long id) {
        return workerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Worker Not Found"));
    }

    public Worker updateWorker(Long id, Worker updatedWorker) {

        Worker worker = getWorkerById(id);

        worker.setWorkerName(updatedWorker.getWorkerName());
        worker.setDepartment(updatedWorker.getDepartment());
        worker.setShift(updatedWorker.getShift());
        worker.setLocation(updatedWorker.getLocation());
        worker.setHelmetWorn(updatedWorker.isHelmetWorn());

        return workerRepository.save(worker);
    }

    public void deleteWorker(Long id) {
        workerRepository.deleteById(id);
    }

}