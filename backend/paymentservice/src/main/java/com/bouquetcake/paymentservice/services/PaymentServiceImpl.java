package com.bouquetcake.paymentservice.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bouquetcake.paymentservice.dto.PaymentRequest;
import com.bouquetcake.paymentservice.entity.Payment;
import com.bouquetcake.paymentservice.entity.PaymentStatus;
import com.bouquetcake.paymentservice.repository.PaymentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Override
    public Payment makePayment(PaymentRequest request) {
        Payment payment = Payment.builder()
                .orderId(request.getOrderId())
                .amount(request.getAmount())
                .status(PaymentStatus.SUCCESS)
                .build();

        return paymentRepository.save(payment);
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }
}