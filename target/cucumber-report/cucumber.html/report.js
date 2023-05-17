$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("electronic.feature");
formatter.feature({
  "line": 1,
  "name": "Electronic Tab Functionality Test",
  "description": "As a user i should add product to cart and order that product successfully",
  "id": "electronic-tab-functionality-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4615197300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to cell phones page successfully",
  "description": "",
  "id": "electronic-tab-functionality-test;verify-user-should-navigate-to-cell-phones-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on \"Electronics\" tab from top menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should navigate to Electronics page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 57982300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 10
    }
  ],
  "location": "TopMenuSteps.clickOnTabFromTopMenu(String)"
});
formatter.result({
  "duration": 447424200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userShouldNavigateToElectronicsPage()"
});
formatter.result({
  "duration": 27403600,
  "status": "passed"
});
formatter.after({
  "duration": 580168900,
  "status": "passed"
});
formatter.before({
  "duration": 3157221000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that the product added successfully and Place order successfully",
  "description": "",
  "id": "electronic-tab-functionality-test;verify-that-the-product-added-successfully-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Mouse Hover on “Electronics” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Mouse Hover on “Cell phones” and click",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Verify the text “Cell phones”",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Click on List View Tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Click on product name Nokia Lumia 1020 link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Verify the text \"Nokia Lumia 1020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify the price \"$349.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Change quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Click on ADD TO CART tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User close notification bar",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User MouseHover on Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User MouseHover and click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User Verify the quantity is \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Verify the Total \"$698.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Click on CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Verify the Text \"Welcome, Please Sign In!\" on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Click on REGISTER tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enter First Name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enter Last Name \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter EmailId \"Random\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter confirm password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Verify the message \"Your registration completed\" on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 117900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userMouseHoverOnElectronicsTab()"
});
formatter.result({
  "duration": 152487200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userMouseHoverOnCellPhonesAndClick()"
});
formatter.result({
  "duration": 550202100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userVerifyTheTextCellPhones()"
});
formatter.result({
  "duration": 1047281200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnListViewTab()"
});
formatter.result({
  "duration": 65505800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 39
    }
  ],
  "location": "ElectronicsSteps.userClickOnProductNameNokiaLumiaLink(String)"
});
formatter.result({
  "duration": 1715049600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheText(String)"
});
formatter.result({
  "duration": 1023948500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.verifyThePrice(String)"
});
formatter.result({
  "duration": 1026916600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.userChangeQuantityTo(String)"
});
formatter.result({
  "duration": 1105671900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnADDTOCARTTab()"
});
formatter.result({
  "duration": 1052223800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 1032112500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userCloseNotificationBar()"
});
formatter.result({
  "duration": 1052477100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userMouseHoverOnShoppingCart()"
});
formatter.result({
  "duration": 1149261300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userMouseHoverAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1481704700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheMessage(String)"
});
formatter.result({
  "duration": 1019685300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheQuantityIs(String)"
});
formatter.result({
  "duration": 1048801100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheTotal(String)"
});
formatter.result({
  "duration": 1023576900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 1057444000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnCHECKOUT()"
});
formatter.result({
  "duration": 1724267600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheTextOnHomePage(String)"
});
formatter.result({
  "duration": 17632300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnREGISTERTab()"
});
formatter.result({
  "duration": 298284000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 1057043600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 1066097000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 20
    }
  ],
  "location": "ElectronicsSteps.userEnterEmailId(String)"
});
formatter.result({
  "duration": 1109788400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 21
    }
  ],
  "location": "ElectronicsSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 1074424300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1074545700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 1556032800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheMessageOnRegisterPage(String)"
});
formatter.result({
  "duration": 1024002000,
  "status": "passed"
});
formatter.after({
  "duration": 603679100,
  "status": "passed"
});
formatter.uri("testsuite.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Tab Functionality Test",
  "description": "As a user i should add product to cart and order that product successfully",
  "id": "computer-tab-functionality-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2939416800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify Product Arrange In Alphabetical Order",
  "description": "",
  "id": "computer-tab-functionality-test;verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Computer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User see  the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 13500,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnComputerMenu()"
});
formatter.result({
  "duration": 1030523000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnDesktop()"
});
formatter.result({
  "duration": 334691500,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userSeeTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 8352411800,
  "status": "passed"
});
formatter.after({
  "duration": 588126300,
  "status": "passed"
});
formatter.before({
  "duration": 3028594300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify product added to shopping cart successFully",
  "description": "",
  "id": "computer-tab-functionality-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User Click on Computer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User Click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Click on Add To Cart for \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Text Build your own computer",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Select Processor \"2.2 GHz Intel Pentium Dual-Core E2200\" using Select class",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Select Ram \"8GB [+$60.00]\" using Select class",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select OS \"Vista Premium\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select Microsoft Office",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select Total Commander",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the price \"$1,475.00\" of desktop",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User  click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Message \"The product has been added to your shopping cart\" on top bar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User close notification bar",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User MouseHover on Shopping cart and Click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Change the Qty to \"2\" and Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify total price is \"$2,950.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Click on CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Verify the Text \"Welcome, Please Sign In!\" on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User Click on CHECKOUT AS GUEST Tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enter first name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter last name  \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter email \"primetesting@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User select country \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enter city \"Mehsana\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enter Addressone \"Tintodan\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enter ZipCode \"382865\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enter phone number \"9898989898\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User Click on Radio Button Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User click on Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User click on payment continue",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User select Credit Card Type \"Master card\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User enter enter Card Holder Name \"Prime testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enter enter Card Number \"5573615091331588\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User select Expire Date \"05\" \"2025\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User enter card code \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click On Payment Info Continue",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Verify Payment Method is \"Credit Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Verify Shipping Method is \"Next Day Air\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Verify Total is \"$2,950.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User Click on CONFIRM",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Verify the Text \"Thank you\" on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Verify the message \"Your order has been successfully processed!\" on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User click on continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify the text \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnComputerMenu()"
});
formatter.result({
  "duration": 922402500,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnDesktop()"
});
formatter.result({
  "duration": 352416900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 30
    }
  ],
  "location": "TestSuiteSteps.userSelectSortByPosition(String)"
});
formatter.result({
  "duration": 2103991800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 31
    }
  ],
  "location": "TestSuiteSteps.userClickOnAddToCartFor(String)"
});
formatter.result({
  "duration": 1062164900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.verifyTheTextBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1027680600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.userSelectProcessorUsingSelectClass(String)"
});
formatter.result({
  "duration": 1110800200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 17
    }
  ],
  "location": "TestSuiteSteps.userSelectRamUsingSelectClass(String)"
});
formatter.result({
  "duration": 1124902700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.userSelectHDDRadio(String)"
});
formatter.result({
  "duration": 1058423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium",
      "offset": 16
    }
  ],
  "location": "TestSuiteSteps.userSelectOS(String)"
});
formatter.result({
  "duration": 1061850700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userSelectMicrosoftOffice()"
});
formatter.result({
  "duration": 1164297700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userSelectTotalCommander()"
});
formatter.result({
  "duration": 1076105500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 18
    }
  ],
  "location": "TestSuiteSteps.verifyThePriceOfDesktop(String)"
});
formatter.result({
  "duration": 1041900000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1045427000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "TestSuiteSteps.verifyTheMessageOnTopBar(String)"
});
formatter.result({
  "duration": 1023793500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userCloseNotificationBar()"
});
formatter.result({
  "duration": 1031144300,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userMouseHoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1640414300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 20
    }
  ],
  "location": "TestSuiteSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 1021852700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "TestSuiteSteps.userChangeTheQtyToAndClickOnUpdateShoppingCart(String)"
});
formatter.result({
  "duration": 1074345900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnUpdateShoppingCart()"
});
formatter.result({
  "duration": 1402861000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.verifyTotalPriceIs(String)"
});
formatter.result({
  "duration": 1036973600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 1065676300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.userClickOnCHECKOUT()"
});
formatter.result({
  "duration": 1549795000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.userVerifyTheTextOnHomePage(String)"
});
formatter.result({
  "duration": 26295400,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnCHECKOUTASGUESTTab()"
});
formatter.result({
  "duration": 695424400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 1101350600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 1116471700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primetesting@gmail.com",
      "offset": 18
    }
  ],
  "location": "TestSuiteSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 1151408800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 21
    }
  ],
  "location": "TestSuiteSteps.userSelectCountry(String)"
});
formatter.result({
  "duration": 1115295300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mehsana",
      "offset": 17
    }
  ],
  "location": "TestSuiteSteps.userEnterCity(String)"
});
formatter.result({
  "duration": 1118927500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tintodan",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.userEnterAddressone(String)"
});
formatter.result({
  "duration": 1117196600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "382865",
      "offset": 20
    }
  ],
  "location": "TestSuiteSteps.userEnterZipCode(String)"
});
formatter.result({
  "duration": 1110804800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9898989898",
      "offset": 25
    }
  ],
  "location": "TestSuiteSteps.userEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 1122885600,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnCONTINUE()"
});
formatter.result({
  "duration": 1065556100,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnRadioButtonNextDayAir()"
});
formatter.result({
  "duration": 1075086100,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.clickOnContinue()"
});
formatter.result({
  "duration": 1058160800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnCreditCard()"
});
formatter.result({
  "duration": 1076526900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnPaymentContinue()"
});
formatter.result({
  "duration": 1062909300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 30
    }
  ],
  "location": "TestSuiteSteps.userSelectCreditCardType(String)"
});
formatter.result({
  "duration": 1102430800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime testing",
      "offset": 35
    }
  ],
  "location": "TestSuiteSteps.userEnterEnterCardHolderName(String)"
});
formatter.result({
  "duration": 1125772900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5573615091331588",
      "offset": 30
    }
  ],
  "location": "TestSuiteSteps.userEnterEnterCardNumber(String)"
});
formatter.result({
  "duration": 1131753100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 25
    },
    {
      "val": "2025",
      "offset": 30
    }
  ],
  "location": "TestSuiteSteps.userSelectExpireDate(String,String)"
});
formatter.result({
  "duration": 1165395100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 22
    }
  ],
  "location": "TestSuiteSteps.userEnterCardCode(String)"
});
formatter.result({
  "duration": 1104969200,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnPaymentInfoContinue()"
});
formatter.result({
  "duration": 1064940600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 26
    }
  ],
  "location": "TestSuiteSteps.verifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 1042335500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 27
    }
  ],
  "location": "TestSuiteSteps.verifyShippingMethodIs(String)"
});
formatter.result({
  "duration": 1028073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 17
    }
  ],
  "location": "TestSuiteSteps.verifyTotalIs(String)"
});
formatter.result({
  "duration": 1040229400,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnCONFIRM()"
});
formatter.result({
  "duration": 1064002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 17
    }
  ],
  "location": "TestSuiteSteps.verifyTheTextOnHomePage(String)"
});
formatter.result({
  "duration": 1040667200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 20
    }
  ],
  "location": "TestSuiteSteps.verifyTheMessageOnHomepage(String)"
});
formatter.result({
  "duration": 1027796000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 1333654300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 17
    }
  ],
  "location": "TestSuiteSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 1035633200,
  "status": "passed"
});
formatter.after({
  "duration": 608141600,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As a user i should navigate to any tab on top menu",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3003792700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify PageNavigation when user select any tab on top menu",
  "description": "",
  "id": "top-menu-test;verify-pagenavigation-when-user-select-any-tab-on-top-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on \"Electronics\" tab from top menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should navigate to Electronics page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 10
    }
  ],
  "location": "TopMenuSteps.clickOnTabFromTopMenu(String)"
});
formatter.result({
  "duration": 491203400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userShouldNavigateToElectronicsPage()"
});
formatter.result({
  "duration": 31216500,
  "status": "passed"
});
formatter.after({
  "duration": 595092700,
  "status": "passed"
});
});