package com.bouquetcake.deliveryservice.service;

import java.util.List;

import com.bouquetcake.deliveryservice.dto.DeliveryRequest;
import com.bouquetcake.deliveryservice.entity.Delivery;
import com.bouquetcake.deliveryservice.entity.DeliveryStatus;

public interface DeliveryService {

    Delivery assignDelivery(DeliveryRequest request);

    List<Delivery> getAllDeliveries();

    Delivery getDeliveryById(Long id);

    List<Delivery> getDeliveriesByDeliveryPerson(Long deliveryPersonId);

    List<Delivery> getDeliveriesByOrder(Long orderId);

    Delivery updateDeliveryStatus(Long id, DeliveryStatus status);
}