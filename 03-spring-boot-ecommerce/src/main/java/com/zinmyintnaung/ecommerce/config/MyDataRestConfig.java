package com.zinmyintnaung.ecommerce.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.zinmyintnaung.ecommerce.entitiy.Country;
import com.zinmyintnaung.ecommerce.entitiy.Product;
import com.zinmyintnaung.ecommerce.entitiy.ProductCategory;
import com.zinmyintnaung.ecommerce.entitiy.State;

import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    //we need to inject EntityManager to expose Entity Ids, i.e., id from product_category table
    private EntityManager entityManager;

    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){

        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        //disable HTTP methods for product as defined above in theUnsupportedActions array
        disableHttpMethods(Product.class, config, theUnsupportedActions);

        //disable HTTP methods for product category as defined above in theUnsupportedActions array
        disableHttpMethods(ProductCategory.class, config, theUnsupportedActions);


        //disable HTTP methods for country  as defined above in theUnsupportedActions array
        disableHttpMethods(Country.class, config, theUnsupportedActions);
        
         //disable HTTP methods for country  as defined above in theUnsupportedActions array
         disableHttpMethods(State.class, config, theUnsupportedActions);

        //call internal helper method to expose the ids
        exposeIds(config);
    }


    private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
        config.getExposureConfiguration()
            .forDomainType(theClass)
            .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
            .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }

    private void exposeIds(RepositoryRestConfiguration config){
        //1. get the list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        //2. create an array of entity types
        List<Class> entityClasses = new ArrayList<>();

        //3. get the entity type for each entity
        for(EntityType tempEntityType : entities){
            entityClasses.add(tempEntityType.getJavaType());
        }

        //4. expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);

    }

}
