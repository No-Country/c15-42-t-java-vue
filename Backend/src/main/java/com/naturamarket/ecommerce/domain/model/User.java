package com.naturamarket.ecommerce.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity(name = "User")
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false)
    private Roles rol;

    @Column(nullable = false, unique = true)
    private String document;

    @Column(nullable = false)
    private String email;

    @Column(name = "number_phone")
    private String numberPhone;

    @Column(nullable = false)
    private String password;
}
