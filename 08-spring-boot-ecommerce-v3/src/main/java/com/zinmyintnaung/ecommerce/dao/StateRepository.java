package com.zinmyintnaung.ecommerce.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.zinmyintnaung.ecommerce.entitiy.State;

@CrossOrigin("http://localhost:4200")
public interface StateRepository extends JpaRepository<State, Integer> {

    //List<State> findByCountryId(@Param("id") Integer id);
    
    List<State> findByCountryCode(@Param("code") String code);
    //above will expose endpoint as http://localhost:8080/api/states/search/findByCountryCode?code=US
    //SQL query as SELECT * FROM product WHERE cateogry_id=x
}
