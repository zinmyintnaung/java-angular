package com.zinmyintnaung.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.zinmyintnaung.ecommerce.entitiy.Product;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository <Product, Long>{
    //no need to write implementation class, we will get crud from JpaRepository
}
