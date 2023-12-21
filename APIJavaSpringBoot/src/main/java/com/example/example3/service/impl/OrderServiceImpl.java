package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.example3.entity.Order; // Updated import
import com.example.example3.service.OrderService; // Updated import
import com.example.example3.repository.OrderRepository; // Updated import
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService { // Updated interface

    private OrderRepository orderRepository; // Updated repository

    @Override
    public Order createOrder(Order order) { // Updated method
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Long orderId) { // Updated method
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        return optionalOrder.get();
    }

    @Override
    public Page<Order> getAllOrders(Pageable pageable) { // Updated method
        return orderRepository.findAll(pageable);
    }

    @Override
    public Order updateOrder(Order order) { // Updated method
        Order existingOrder = orderRepository.findById(order.getId()).get();
        // Update other fields as needed
        existingOrder.setFullname(order.getFullname());
        existingOrder.setEmail(order.getEmail());
        existingOrder.setProductId(order.getProductId());
        existingOrder.setPrice(order.getPrice());
        existingOrder.setQty(order.getQty());
        existingOrder.setAmount(order.getAmount());
        existingOrder.setStatus(order.getStatus());

        Order updatedOrder = orderRepository.save(existingOrder);
        return updatedOrder;
    }

    @Override
    public void deleteOrder(Long orderId) { // Updated method
        orderRepository.deleteById(orderId);
    }
}
