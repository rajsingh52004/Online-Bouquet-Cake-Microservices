package com.bouquetcake.authservice.dto;

import com.bouquetcake.authservice.entity.Role;

import lombok.Data;

@Data
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;
}