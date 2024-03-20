package com.zinmyintnaung.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.zinmyintnaung.ecommerce.entitiy.ProductCategory;

@RepositoryRestResource(collectionResourceRel = "productCategory", path="product-category") //define custom JSON + end-points name
public interface ProductCategoryRepository extends JpaRepository <ProductCategory, Long>{
    //no need to write implementation class, we will get crud from JpaRepository
}
