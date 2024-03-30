package com.zinmyintnaung.ecommerce.service;

import com.zinmyintnaung.ecommerce.dto.Purchase;
import com.zinmyintnaung.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}