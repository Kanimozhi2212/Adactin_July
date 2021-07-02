$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "##single set of data"
    },
    {
      "line": 5,
      "value": "#Scenario:"
    },
    {
      "line": 6,
      "value": "#Given user Lanuch The Application"
    },
    {
      "line": 7,
      "value": "#When user Enter The \"Kanimozhi22\" In Username Field"
    },
    {
      "line": 8,
      "value": "#And user Enter The \"Kani@2212@A\" In Password Field"
    },
    {
      "line": 9,
      "value": "#Then user Click On The Login Button and It Navigates To The Search"
    },
    {
      "line": 12,
      "value": "##multiple set of data"
    }
  ],
  "line": 14,
  "name": "Adactin Hotel Booking",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin-hotel-booking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user Lanuch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click On The Login Button and It Navigates To The Search",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 21,
      "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;1"
    },
    {
      "cells": [
        "qwert",
        "789456"
      ],
      "line": 22,
      "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;2"
    },
    {
      "cells": [
        "zxcv",
        "456123"
      ],
      "line": 23,
      "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;3"
    },
    {
      "cells": [
        "Kanimozhi22",
        "Kani@2212@A"
      ],
      "line": 24,
      "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Adactin Hotel Booking",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user Lanuch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user Enter The \"qwert\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Enter The \"789456\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click On The Login Button and It Navigates To The Search",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Lanuch_The_Application()"
});
formatter.result({
  "duration": 8199939199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwert",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 238992700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 173796400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_and_It_Navigates_To_The_Search()"
});
formatter.result({
  "duration": 580757000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Adactin Hotel Booking",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user Lanuch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user Enter The \"zxcv\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Enter The \"456123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click On The Login Button and It Navigates To The Search",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Lanuch_The_Application()"
});
formatter.result({
  "duration": 5150567900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zxcv",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 113590199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 141456101,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_and_It_Navigates_To_The_Search()"
});
formatter.result({
  "duration": 550582700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Adactin Hotel Booking",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin-hotel-booking;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user Lanuch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user Enter The \"Kanimozhi22\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Enter The \"Kani@2212@A\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click On The Login Button and It Navigates To The Search",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Lanuch_The_Application()"
});
formatter.result({
  "duration": 626652701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanimozhi22",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 99575900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kani@2212@A",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 137380700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_and_It_Navigates_To_The_Search()"
});
formatter.result({
  "duration": 2038733700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#we can also add a column if we want(|Username|Password|ccv|Cardnum|)"
    }
  ],
  "line": 28,
  "name": "User Search and Select The Room and Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Select The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Select The Location",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter The Check In Date In Check In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Check Out Date In Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click On The Search Button and It Navigates To The Select",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 474437600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location()"
});
formatter.result({
  "duration": 236093399,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 246671801,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 216996500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Check_In_Date_In_Check_In_Date_Field()"
});
formatter.result({
  "duration": 126987800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Check_Out_Date_In_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 118266201,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 146323200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 206597000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Search_Button_and_It_Navigates_To_The_Select()"
});
formatter.result({
  "duration": 3655005900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User Select The Hotel Which Is Suitable",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-which-is-suitable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user Select The Hotel Name",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user Click On The Continue Button and It Navigates To The Book A Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel_Name()"
});
formatter.result({
  "duration": 2128863200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Continue_Button_and_It_Navigates_To_The_Book_A_Hotel()"
});
formatter.result({
  "duration": 1425125600,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User Fill Up The Details",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-fill-up-the-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "user Enter The Firstname In Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user Enter The Lastname In Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Enter The Billing Address In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user Enter The Credit Card No. in Credit Card No. Field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user Select The Expiry Date In Select Month Field",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user Select The Expiry Date In Select Year Field",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user Enter The Ccv In Ccv Field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user Click On The Book Now Button and It Navigates To The Booking Confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Firstname_In_Firstname_Field()"
});
formatter.result({
  "duration": 144479200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Lastname_In_Lastname_Field()"
});
formatter.result({
  "duration": 229262600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Billing_Address_In_Billing_Address_Field()"
});
formatter.result({
  "duration": 193392600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Credit_Card_No_in_Credit_Card_No_Field()"
});
formatter.result({
  "duration": 146967001,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 683184600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Date_In_Select_Month_Field()"
});
formatter.result({
  "duration": 327654501,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Date_In_Select_Year_Field()"
});
formatter.result({
  "duration": 371043500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Ccv_In_Ccv_Field()"
});
formatter.result({
  "duration": 166603501,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Book_Now_Button_and_It_Navigates_To_The_Booking_Confirmation()"
});
formatter.result({
  "duration": 2141911200,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "User Click On Itinerary",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-click-on-itinerary",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "user Click On The My Itinerary and It Navigates To Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_My_Itinerary_and_It_Navigates_To_Logout_Page()"
});
formatter.result({
  "duration": 10486329600,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "User Logout After Booking",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logout-after-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "user Click On The Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Logout_Page()"
});
formatter.result({
  "duration": 3700704301,
  "status": "passed"
});
});