// Create a class named APIClient and create two methods with the same name passing different input 
// arguments.  
 
// Requirements:  - Inside the APIClient class, define the sendRequest method with multiple overloaded 
// versions.  - One version should accept one input argument: a string for the endpoint.  - Another version of the sendRequest method should accept three input arguments: a string for 
// the endpoint, a string for the requestBody, and a boolean parameter requestStatus to verify 
// whether the request is successful.  - Create a method to demonstrate the usage of the overloaded sendRequest method.  - Create an object of the APIClient class.  - Call both versions of the sendRequest method on the APIClient object with different sets of 
// input arguments to showcase method overloading.  

class APIClient{

sendRequest(endPoint:string):void
sendRequest(endPoint:string,requestBody:string,requestStatus:boolean):void
sendRequest(endPoint:string,requestBody?:string,requestStatus?:boolean):void

{
if(endPoint)
{
    console.log("this is the end point ",endPoint)
}
else if(requestBody)
{
    console.log(" enter request body",requestBody)
}
else{
    console.log(" the request status is ",requestStatus)
}
}
}

let newObject=new APIClient()

newObject.sendRequest("2 points")
newObject.sendRequest("", "RQB",false)
newObject.sendRequest("", "", true)



// Requirements:  - Create a class named BasePage  - Create methods like findElement(), clickElement(), enterText() and 
// performCommonTasks().  - Create a subclass named LoginPage.  - Override the performCommonTasks() method in the LoginPage class.  - Demonstrate the concept by creating objects for both classes and calling their methods.  
 
// Expected Outcome:  
// Upon completion, you should be able to:  - Grasp the fundamentals of inheritance  - Create a subclass that inherits attributes and methods from a superclass - Override methods in a subclass.  
 
class Basepage{
findElement(){ console.log("element has been found")}
clickElement(){ console.log("click the element")}
enterText(){ console.log("enter the text")}
performCommonTasks(){ console.log("perform common task on it ")}
}

class login extends Basepage{
performCommonTasks(){ console.log("perform task on the extended class ")
super.performCommonTasks()
}
}

let PO=new login()
PO.performCommonTasks()
