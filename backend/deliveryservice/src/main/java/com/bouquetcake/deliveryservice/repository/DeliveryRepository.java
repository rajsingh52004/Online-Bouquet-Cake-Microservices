package com.bouquetcake.deliveryservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bouquetcake.deliveryservice.entity.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

    List<Delivery> findByDeliveryPersonId(Long deliveryPersonId);

    List<Delivery> findByOrderId(Long orderId);
}