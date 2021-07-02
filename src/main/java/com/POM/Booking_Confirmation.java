package com.POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Booking_Confirmation {
	
	public static WebDriver driver;
	
	
	@FindBy(id="my_itinerary")
	private WebElement myitinerary;
	
	
	public Booking_Confirmation(WebDriver driver2) {
		Booking_Confirmation.driver=driver2;
		PageFactory.initElements(driver2,this);
	}
	
	public WebElement getMyitinerary() {
		return myitinerary;
	}


	

}
