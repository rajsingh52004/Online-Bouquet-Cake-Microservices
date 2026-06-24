package com.bouquetcake.deliveryservice.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bouquetcake.deliveryservice.dto.DeliveryRequest;
import com.bouquetcake.deliveryservice.entity.Delivery;
import com.bouquetcake.deliveryservice.entity.DeliveryStatus;
import com.bouquetcake.deliveryservice.repository.DeliveryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeliveryServiceImpl implements DeliveryService {

    private final DeliveryRepository deliveryRepository;

    @Override
    public Delivery assignDelivery(DeliveryRequest request) {
        Delivery delivery = Delivery.builder()
                .orderId(request.getOrderId())
                .deliveryPersonId(request.getDeliveryPersonId())
                .status(DeliveryStatus.ASSIGNED)
                .assignedAt(LocalDateTime.now())
                .build();

        return deliveryRepository.save(delivery);
    }

    @Override
    public List<Delivery> getAllDeliveries() {
        return deliveryRepository.findAll();
    }

    @Override
    public Delivery getDeliveryById(Long id) {
        return deliveryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Delivery not found"));
    }

    @Override
    public List<Delivery> getDeliveriesByDeliveryPerson(Long deliveryPersonId) {
        return deliveryRepository.findByDeliveryPersonId(deliveryPersonId);
    }

    @Override
    public List<Delivery> getDeliveriesByOrder(Long orderId) {
        return deliveryRepository.findByOrderId(orderId);
    }

    @Override
    public Delivery updateDeliveryStatus(Long id, DeliveryStatus status) {
        Delivery delivery = getDeliveryById(id);
        delivery.setStatus(status);
        return deliveryRepository.save(delivery);
    }
}