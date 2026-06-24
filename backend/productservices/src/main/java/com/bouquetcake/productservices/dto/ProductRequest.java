package com.bouquetcake.productservices.dto;

import com.bouquetcake.productservices.entity.Category;

import lombok.Data;

@Data
public class ProductRequest {

    private String name;

    private String description;

    private Double price;

    private String imageUrl;

    private Integer stock;

    private Category category;
}