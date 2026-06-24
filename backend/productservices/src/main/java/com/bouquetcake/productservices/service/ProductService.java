package com.bouquetcake.productservices.service;

import java.util.List;

import com.bouquetcake.productservices.dto.ProductRequest;
import com.bouquetcake.productservices.entity.Category;
import com.bouquetcake.productservices.entity.Product;

public interface ProductService {

    Product addProduct(ProductRequest request);

    List<Product> getAllProducts();

    Product getProductById(Long id);

    List<Product> getProductsByCategory(Category category);

    Product updateProduct(Long id, ProductRequest request);

    String deleteProduct(Long id);
}