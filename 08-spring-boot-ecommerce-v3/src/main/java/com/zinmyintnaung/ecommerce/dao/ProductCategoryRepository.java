package com.zinmyintnaung.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.zinmyintnaung.ecommerce.entitiy.ProductCategory;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path="product-category") //define custom JSON + end-points name
public interface ProductCategoryRepository extends JpaRepository <ProductCategory, Long>{
    //no need to write implementation class, we will get crud from JpaRepository
    
}
