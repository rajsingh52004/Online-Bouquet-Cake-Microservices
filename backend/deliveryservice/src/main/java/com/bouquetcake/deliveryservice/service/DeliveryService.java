package com.bouquetcake.deliveryservice.service;

import java.util.List;

import com.bouquetcake.deliveryservice.dto.DeliveryRequest;
import com.bouquetcake.deliveryservice.entity.Delivery;
import com.bouquetcake.deliveryservice.entity.DeliveryStatus;

public interface DeliveryService {

    Delivery createDelivery(DeliveryRequest request);

    List<Delivery> getAllDeliveries();

    Delivery getDeliveryById(Long id);

    Delivery updateStatus(Long id, DeliveryStatus status);
}