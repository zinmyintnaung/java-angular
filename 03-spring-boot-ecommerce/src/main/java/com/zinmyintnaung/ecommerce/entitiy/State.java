package com.zinmyintnaung.ecommerce.entitiy;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="state")
@Data
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="name")
    private String name;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name="country_id")
    private Country country;
}
