class WebComponent  {

selector: string;
constructor(selector: string) 
{this.selector = selector }

click(){ console.log(`click the icon" ${this.selector}`)}
focus(){ console.log(`focus the icon" ${this.selector}`)}
}

class button extends WebComponent 
{
Methodbutton(){console.log("press the button")}
}

class TextInput extends WebComponent {
  value: string = "";

enterText(text: string){
this.value = text
console.log(`Entering text: ${this.value}`) }
}

function testComponents() 
{
const loginButton = new button("loginButton")
const usernameInput = new TextInput("username")

loginButton.focus();
loginButton.click();
loginButton.Methodbutton()

usernameInput.enterText("Stane");
console.log(`Stored input value: ${usernameInput.value}`);
}

testComponents()


// Step 1: Implement the `WebComponent` Base Class 
// Define a class `WebComponent` with: 
//    - A constructor that initializes a `selector` property. 
//    - A `click()` method that prints a console message simulating a click. 
//    - A `focus()` method that prints a console message simulating focusing on the component. 
 
// Step 2: Implement the `Button` Derived Class 
// Define a class `Button` that extends `WebComponent`. - Override the `click()` method to include an additional message specific to buttons. 
 
// Step 3: Implement the `TextInput` Derived Class 
// Define a class `TextInput` that extends `WebComponent` with: 
//    - A property `value` initialized to an empty string. 
//    - An `enterText(text: string)` method that sets `value` and prints a message simulating text entry. 
 
// Step 4: Testing the Components 
// Define a function testComponents to demonstrate the usage of the classes -  Instantiate the `Button` and `TextInput` classes with example selectors. 
//   - Use the instances to simulate clicking the button and entering text into the text input. 