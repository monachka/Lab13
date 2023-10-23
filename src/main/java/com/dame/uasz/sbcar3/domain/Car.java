package com.dame.uasz.sbcar3.domain;

import jakarta.persistence.FetchType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.ManyToMany;
import java.util.List;

@Entity
public class Car
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String brand, model, color, registerNumber;
    @Column(name = "year")
    private int years;
    private int price;

    public Car() {}

    public Car(String brand, String model, String color, String registerNumber, int years, int price, Owner owner)
    {
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registerNumber = registerNumber;
        this.years = years;
        this.price = price;
        this.owner = owner;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private Owner owner;

    //////////////////getters/////////////////

    public long getId()
    {
        return id;
    }

    public String getBrand()
    {
        return brand;
    }

     public String getModel()
    {
        return model;
    }

     public String getColor()
    {
        return color;
    }

     public String getRegisterNumber()
    {
        return registerNumber;
    }

     public int getYears()
    {
        return years;
    }

     public int getPrice()
    {
        return price;
    }

    ////////////////setters///////////////////

    public void setId(long id)
    {
        this.id = id;
    }

    public void setBrand(String brand)
    {
        this.brand  = brand;
    }

     public void setModel(String model)
    {
        this.model = model;
    }

     public void setColor(String color)
    {
        this.color = color;
    }

     public void setRegisterNumber(String registerNumber)
    {
        this.registerNumber = registerNumber;
    }

     public void setYears(int years)
    {
        this.years = years;
    }

     public void setPrice(int price)
    {
        this.price = price;
    }

}