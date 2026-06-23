package com.bouquetcake.authservice.service;

import com.bouquetcake.authservice.dto.AuthResponse;
import com.bouquetcake.authservice.dto.LoginRequest;
import com.bouquetcake.authservice.dto.RegisterRequest;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}