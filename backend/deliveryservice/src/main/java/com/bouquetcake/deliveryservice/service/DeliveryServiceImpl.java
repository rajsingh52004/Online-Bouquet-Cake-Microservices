package com.bouquetcake.deliveryservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bouquetcake.deliveryservice.dto.DeliveryRequest;
import com.bouquetcake.deliveryservice.entity.Delivery;
import com.bouquetcake.deliveryservice.entity.DeliveryStatus;
import com.bouquetcake.deliveryservice.repository.DeliveryRepository;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    private final DeliveryRepository deliveryRepository;

    public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public Delivery createDelivery(DeliveryRequest request) {
        Delivery delivery = new Delivery();
        delivery.setOrderId(request.getOrderId());
        delivery.setDeliveryAddress(request.getDeliveryAddress());
        delivery.setStatus(DeliveryStatus.PENDING);

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
    public Delivery updateStatus(Long id, DeliveryStatus status) {
        Delivery delivery = getDeliveryById(id);
        delivery.setStatus(status);
        return deliveryRepository.save(delivery);
    }
}