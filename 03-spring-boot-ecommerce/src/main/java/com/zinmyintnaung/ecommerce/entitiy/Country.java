package com.zinmyintnaung.ecommerce.entitiy;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="country")
@Data
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="code")
    private String code;

    @Column(name="name")
    private String name;

    @OneToMany(mappedBy = "country", 
        fetch = FetchType.LAZY,
        cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private List<State> states;

}
