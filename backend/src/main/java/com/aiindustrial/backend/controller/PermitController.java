package com.aiindustrial.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.aiindustrial.backend.entity.Permit;
import com.aiindustrial.backend.service.PermitService;

@RestController
@RequestMapping("/permits")
@CrossOrigin("*")
public class PermitController {

    private final PermitService service;

    public PermitController(PermitService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Permit save(@RequestBody Permit permit) {
        return service.savePermit(permit);
    }

    @GetMapping
    public List<Permit> getAll() {
        return service.getAllPermits();
    }

    @GetMapping("/{id}")
    public Permit getOne(@PathVariable Long id) {
        return service.getPermit(id);
    }

    @PutMapping("/{id}")
    public Permit update(@PathVariable Long id,
                         @RequestBody Permit permit) {
        return service.updatePermit(id, permit);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.deletePermit(id);

        return "Permit Deleted Successfully";
    }
}