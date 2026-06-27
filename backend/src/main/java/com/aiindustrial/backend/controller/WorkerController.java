package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.Worker;
import com.aiindustrial.backend.service.WorkerService;

@RestController
@RequestMapping("/workers")
@CrossOrigin(origins = "*")
public class WorkerController {

    private final WorkerService workerService;

    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Worker saveWorker(@RequestBody Worker worker) {
        return workerService.saveWorker(worker);
    }

    @GetMapping
    public List<Worker> getAllWorkers() {
        return workerService.getAllWorkers();
    }

    @GetMapping("/{id}")
    public Worker getWorkerById(@PathVariable Long id) {
        return workerService.getWorkerById(id);
    }

    @PutMapping("/{id}")
    public Worker updateWorker(@PathVariable Long id,
                               @RequestBody Worker worker) {
        return workerService.updateWorker(id, worker);
    }

    @DeleteMapping("/{id}")
    public String deleteWorker(@PathVariable Long id) {

        workerService.deleteWorker(id);

        return "Worker Deleted Successfully";
    }

}