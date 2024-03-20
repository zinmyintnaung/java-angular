package com.zinmyintnaung.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zinmyintnaung.ecommerce.entitiy.Product;

public interface ProductRepository extends JpaRepository <Product, Long>{
    //no need to write implementation class, we will get crud from JpaRepository
}
