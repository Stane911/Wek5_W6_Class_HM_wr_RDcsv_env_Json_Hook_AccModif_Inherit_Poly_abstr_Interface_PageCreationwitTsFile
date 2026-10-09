// Classroom 2: Method overloading and Method overriding
// Overloading
// Create a class TextBox and implement method overloading for fill() with the following signatures:
// fill(text: string)
// fill(text: string, locator: string)
// Ensure a single implementation handles both cases appropriately.
// method overloading 
class textbox{
fill(text: string, locator?: string):void
fill(text: string):void
{
if(text)
{
    console.log("Its a Text message",text)

}
else{
    console.log("Its a locator")
}
}
}
let Object22=new textbox()
Object22.fill("","hurriccane")
Object22.fill("Peaky")


// Overriding- Class Activity
// Create a parent class Browser with a method browserVersion().
// Create a child class Chrome that overrides browserVersion() and prints a specific browser version

class Browser{
browserVersion()
{
    console.log(" the Browser version is 122.200.122")
}
}
class Chrome extends Browser{
browserVersion()
{
    console.log(" the Browser version is 177.700.177")
    super.browserVersion()
}
}
let Object44=new Chrome()
Object44.browserVersion()


//////////////////////////////////////////Workout:
// Method Overloading // craete a class with same method signature and
//  implement one method with optional parameter and If/else statment to achive method overloading
class calculator {
add(url:string, title:string):void
add(url:string):void
add(url:string,title?:string):void
{
if(title)
{
 console.log("method overloading",title)
}
else
{
console.log("no overloading",url)
}
}
}
let object=new calculator()
object.add("www.url","stane")
object.add("www.url")


// Method OverRiding method // 2 classes of same method name//  user extends keyword to relate class, to implement the parent class methodband clall child method.
//use Super keyword to implement the methods of parent class
class login {
login(){
    console.log("1login success")
}    
}
class Admin extends login{
login() {
    console.log("2login failed")
    super.login()
}    
}
let object2=new Admin()
object2.login()
  













