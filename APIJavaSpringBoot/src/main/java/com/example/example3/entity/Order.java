package com.example.example3.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orderss")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullname;

    @Column(nullable = false)
    private String email;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product productId;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private int qty;

    @Column(nullable = false)
    private Integer amount;

    @Column(nullable = false)
    private Integer status;

    // Add any other fields or relationships as needed
}
