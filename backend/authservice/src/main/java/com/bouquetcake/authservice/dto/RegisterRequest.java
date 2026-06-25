package com.bouquetcake.authservice.dto;

import com.bouquetcake.authservice.entity.Role;

public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Role getRole() {
        return role;
    }
}