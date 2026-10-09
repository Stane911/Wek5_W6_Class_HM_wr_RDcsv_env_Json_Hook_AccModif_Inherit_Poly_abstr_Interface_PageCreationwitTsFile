import { log } from "console";
import { pageRules } from "./interface_Abstraction_Framework";

abstract class BasePage implements pageRules
{
verifyPage()        {    console.log("Page has been Verified");     }
waitForPageLoad()   {    console.log("Waiting for page to Load")    }
getPageTitle()      {    console.log("get Page title")              }
}

// createing a concerte class to call the abstrace method since we cant create object for abstrace class//
class LoginPage extends BasePage 
{
verifyPage()        {   console.log("LoginPage has been Verified")   }
enterUsername()     {   console.log("the un is Stane")               }
enterPassword()     {   console.log(' Pw1564GHt')                    }
clickLogin()        {   console.log("Click it")                      }
}

class ProductPage extends BasePage
{
verifyPage()        {   console.log(" Product Page has been verified")}
searchProduct()     {   console.log("searching")                      }
AddtoCart()         {   console.log("Added to Cart")                  }
}

let objLp=new LoginPage()

objLp.waitForPageLoad()
objLp.verifyPage()
objLp.enterUsername()
objLp.enterPassword()
objLp.clickLogin()
objLp.getPageTitle()


let obj2=new ProductPage()

obj2.AddtoCart()
obj2.getPageTitle()
obj2.searchProduct()
obj2.waitForPageLoad()
obj2.getPageTitle()


                                // Assignment Completed//
// Q1 Why was verifyPage() placed inside an Interface? 

// because its a common page that we are going to implement in all the class (pages ex: loginpage,productpage), 
// thaty we created the method in interface and called in siide abstrace using implement keyword


// Q2 Can an Interface contain method implementation? 

// An interface can never have implementations, interface contain only unimplemented methods , its like a Rulebook.
// What happens?  // throws error

// Q3 What keyword is used to follow Interface rules? 

//  implements is the keyword and we need to export the interface befoer that.


                    // Abstract Class Related 

// Q4 Why was waitForPageLoad() implemented inside BasePage? 

//beacause it cannot be implemented inside  interface and its a common method to load page

// Q5 Can we create an object for BasePage? // Why or why not? 

//No, Object cannot be created for base page since its an abstrace Class 
// we need a normal/concrete class to cll the menthods craeted in the abstrace class 


// Q6 What keyword is used to inherit from an Abstract Class? 
//  [extends]  keyword



