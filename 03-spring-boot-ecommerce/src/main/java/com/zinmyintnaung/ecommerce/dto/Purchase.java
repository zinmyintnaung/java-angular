package com.zinmyintnaung.ecommerce.dto;

import java.util.Set;

import com.zinmyintnaung.ecommerce.entitiy.Address;
import com.zinmyintnaung.ecommerce.entitiy.Customer;
import com.zinmyintnaung.ecommerce.entitiy.Order;
import com.zinmyintnaung.ecommerce.entitiy.OrderItem;

import lombok.Data;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
