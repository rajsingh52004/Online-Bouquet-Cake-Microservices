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

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/deliveries")
@RequiredArgsConstructor
@CrossOrigin("*")
public class DeliveryController {

    private final DeliveryService deliveryService;

    @PostMapping("/assign")
    public Delivery assignDelivery(@RequestBody DeliveryRequest request) {
        return deliveryService.assignDelivery(request);
    }

    @GetMapping
    public List<Delivery> getAllDeliveries() {
        return deliveryService.getAllDeliveries();
    }

    @GetMapping("/{id}")
    public Delivery getDeliveryById(@PathVariable Long id) {
        return deliveryService.getDeliveryById(id);
    }

    @GetMapping("/person/{deliveryPersonId}")
    public List<Delivery> getDeliveriesByDeliveryPerson(@PathVariable Long deliveryPersonId) {
        return deliveryService.getDeliveriesByDeliveryPerson(deliveryPersonId);
    }

    @GetMapping("/order/{orderId}")
    public List<Delivery> getDeliveriesByOrder(@PathVariable Long orderId) {
        return deliveryService.getDeliveriesByOrder(orderId);
    }

    @PutMapping("/{id}/status")
    public Delivery updateDeliveryStatus(
            @PathVariable Long id,
            @RequestParam DeliveryStatus status
    ) {
        return deliveryService.updateDeliveryStatus(id, status);
    }
}