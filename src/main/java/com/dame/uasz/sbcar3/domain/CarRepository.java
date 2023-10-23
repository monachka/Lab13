package com.dame.uasz.sbcar3.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long>
{
    List<Car> findByBrand(@Param("brand") String brand);
    List<Car> findByColor(@Param("color") String color);
    List<Car> findByBrandAndModel(String brand, String model);
    List<Car> findByBrandOrColor(String brand, String color);
    List<Car> findByModel(String model);
}
