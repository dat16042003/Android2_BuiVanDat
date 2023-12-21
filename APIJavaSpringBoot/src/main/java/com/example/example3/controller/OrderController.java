package com.example.example3.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.example3.entity.Order; // Import the Order entity
import com.example.example3.service.OrderService; // Import the OrderService

@RestController
@AllArgsConstructor
@RequestMapping("api/orders") // Change the base path to "api/orders"
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
public class OrderController { // Rename the controller

    private OrderService orderService; // Rename the service

    // Create Order REST API
    @PostMapping // Keep the method name as "create" for consistency
    public ResponseEntity<Order> createOrder(@RequestBody Order order) { // Rename the method
        Order savedOrder = orderService.createOrder(order); // Rename the service method
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    // Get Order by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long orderId) { // Rename the method and parameter
        Order order = orderService.getOrderById(orderId); // Rename the service method
        if (order != null) {
            return new ResponseEntity<>(order, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get All Orders REST API
    @GetMapping
    public ResponseEntity<Page<Order>> getAllOrders(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Order> orders = orderService.getAllOrders(pageable); // Rename the service method
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    // Update Order REST API
    @PutMapping("{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") Long orderId,
            @RequestBody Order order) { // Rename the method and parameter
        order.setId(orderId);
        Order updatedOrder = orderService.updateOrder(order); // Rename the service method
        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
    }

    // Delete Order REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Long orderId) { // Rename the parameter
        orderService.deleteOrder(orderId); // Rename the service method
        return new ResponseEntity<>("Order successfully deleted!", HttpStatus.OK);
    }
}
