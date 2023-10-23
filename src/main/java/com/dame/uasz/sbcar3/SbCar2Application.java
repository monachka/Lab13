package com.dame.uasz.sbcar3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dame.uasz.sbcar3.domain.Car;
import com.dame.uasz.sbcar3.domain.CarRepository;
import com.dame.uasz.sbcar3.domain.Owner;
import com.dame.uasz.sbcar3.domain.OwnerRepository;
import com.dame.uasz.sbcar3.domain.User;
import com.dame.uasz.sbcar3.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import java.util.logging.Logger;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class SbCar2Application implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(SbCar2Application.class);

	@Autowired
	private CarRepository repository;

	@Autowired
	private OwnerRepository ownerrepository;

	@Autowired
	private UserRepository urepository;

	public static void main(String[] args) {
		SpringApplication.run(SbCar2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception
	{
		Owner owner1 = new Owner("John", "Johnson");
		Owner owner2 = new Owner("Mary", "Robinson");
		Owner owner3 = new Owner("Monachka", "KANE");
		ownerrepository.saveAll(Arrays.asList(owner1, owner2, owner3));

		Car car1 = new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000, owner1);
		Car car2 = new Car("Nissan", "Leaf", "White", "SSJ-3002", 2019, 29000, owner2);
		Car car3 = new Car("Toyota", "Prius", "Silver", "KKO-0212", 2020, 39000, owner1);
		Car car4 = new Car("Mercedes", "Benz", "Silver", "DK-3503", 2023, 390000, owner2);
		Car car5 = new Car("Sport", "Truck", "Gold", "TH-J678", 2023, 79000, owner3);
		repository.saveAll(Arrays.asList(car1, car2, car3, car4, car5));
	
		for (Car car : repository.findAll())
		{
			logger.info(car.getBrand()+" "+car.getModel());
		}


		urepository.save(new User("user", "$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue","USER"));
		urepository.save(new User("admin", "$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW", "ADMIN"));
	}
/* spring.data.rest.basePath=/api */
}