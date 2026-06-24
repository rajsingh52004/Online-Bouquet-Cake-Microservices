package com.bouquetcake.orderservice.service;

import com.bouquetcake.orderservice.dto.OrderRequest;
import com.bouquetcake.orderservice.entity.CustomerOrder;
import com.bouquetcake.orderservice.entity.OrderStatus;
import com.bouquetcake.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Override
    public CustomerOrder placeOrder(OrderRequest request) {
        CustomerOrder order = CustomerOrder.builder()
                .userId(request.getUserId())
                .totalAmount(request.getTotalAmount())
                .status(OrderStatus.PENDING)
                .orderDate(LocalDateTime.now())
                .build();

        return orderRepository.save(order);
    }

    @Override
    public List<CustomerOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public CustomerOrder getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
    }

    @Override
    public List<CustomerOrder> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public CustomerOrder updateOrderStatus(Long id, OrderStatus status) {
        CustomerOrder order = getOrderById(id);
        order.setStatus(status);
        return orderRepository.save(order);
    }

    @Override
    public String cancelOrder(Long id) {
        CustomerOrder order = getOrderById(id);
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
        return "Order cancelled successfully";
    }
}