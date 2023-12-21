package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.example3.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Page<Order> findAll(Pageable pageable);
}
