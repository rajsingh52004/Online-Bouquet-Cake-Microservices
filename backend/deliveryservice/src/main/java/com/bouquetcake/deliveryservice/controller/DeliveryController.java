package com.bouquetcake.deliveryservice.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bouquetcake.deliveryservice.dto.DeliveryRequest;
import com.bouquetcake.deliveryservice.entity.Delivery;
import com.bouquetcake.deliveryservice.entity.DeliveryStatus;
import com.bouquetcake.deliveryservice.service.DeliveryService;

@RestController
@RequestMapping("/deliveries")
@CrossOrigin("*")
public class DeliveryController {

    private final DeliveryService deliveryService;

    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @PostMapping
    public Delivery createDelivery(@RequestBody DeliveryRequest request) {
        return deliveryService.createDelivery(request);
    }

    @GetMapping
    public List<Delivery> getAllDeliveries() {
        return deliveryService.getAllDeliveries();
    }

    @GetMapping("/{id}")
    public Delivery getDeliveryById(@PathVariable Long id) {
        return deliveryService.getDeliveryById(id);
    }

    @PutMapping("/{id}/status")
    public Delivery updateStatus(
            @PathVariable Long id,
            @RequestParam DeliveryStatus status
    ) {
        return deliveryService.updateStatus(id, status);
    }
}