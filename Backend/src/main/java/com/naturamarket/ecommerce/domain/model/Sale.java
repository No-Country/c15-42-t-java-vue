package com.naturamarket.ecommerce.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Sale")
@Table(name = "sale")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_sale", nullable = false)
    private LocalDateTime dateOfSale;

    @Column(nullable = false)
    private Double total;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL)
    private Set<SaleDatail> listProducts;
}
