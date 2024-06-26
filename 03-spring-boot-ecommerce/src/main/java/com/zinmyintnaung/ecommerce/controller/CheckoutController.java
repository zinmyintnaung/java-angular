package com.zinmyintnaung.ecommerce.controller;

import org.springframework.web.bind.annotation.*;

import com.zinmyintnaung.ecommerce.dto.Purchase;
import com.zinmyintnaung.ecommerce.dto.PurchaseResponse;
import com.zinmyintnaung.ecommerce.service.CheckoutService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }

}
