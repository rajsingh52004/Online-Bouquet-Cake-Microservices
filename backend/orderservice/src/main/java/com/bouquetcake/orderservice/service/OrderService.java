package com.bouquetcake.orderservice.service;

import java.util.List;

import com.bouquetcake.orderservice.dto.OrderRequest;
import com.bouquetcake.orderservice.entity.CustomerOrder;
import com.bouquetcake.orderservice.entity.OrderStatus;

public interface OrderService {

    CustomerOrder placeOrder(OrderRequest request);

    List<CustomerOrder> getAllOrders();

    CustomerOrder getOrderById(Long id);

    List<CustomerOrder> getOrdersByUserId(Long userId);

    CustomerOrder updateOrderStatus(Long id, OrderStatus status);

    String cancelOrder(Long id);
}