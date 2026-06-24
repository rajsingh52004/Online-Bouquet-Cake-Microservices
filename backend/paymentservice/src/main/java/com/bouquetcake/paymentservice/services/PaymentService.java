package com.bouquetcake.paymentservice.services;

import java.util.List;

import com.bouquetcake.paymentservice.dto.PaymentRequest;
import com.bouquetcake.paymentservice.entity.Payment;

public interface PaymentService {

    Payment makePayment(PaymentRequest request);

    List<Payment> getAllPayments();

    Payment getPaymentById(Long id);
}