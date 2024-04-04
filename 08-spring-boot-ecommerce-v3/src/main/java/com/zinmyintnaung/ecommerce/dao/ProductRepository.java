package com.zinmyintnaung.ecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.zinmyintnaung.ecommerce.entitiy.Product;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository <Product, Long>{
    //no need to write implementation class, we will get crud from JpaRepository
    
    //findByXXXX is a spring query method
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    //above will expose endpoint as http://localhost:4200/api/products/search/findByCategoryId?id=x
    //SQL query as SELECT * FROM product WHERE cateogry_id=x

    //findByNameContaining is a spring query method
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
    //SQL query as SELECT * FROM product WHERE name LIKE '%xx%'

}
