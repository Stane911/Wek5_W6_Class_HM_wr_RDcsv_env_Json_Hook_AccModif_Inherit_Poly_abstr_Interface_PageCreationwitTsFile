import { log } from "node:console";
import { BankAccount } from "./accessModifier";

class ChildbankAccount extends BankAccount
{
BankDetails(){console.log("Bank details are listed ")}
CallBalance(){console.log(this.balance)} //callin protected property
}

let ChildObject=new ChildbankAccount()

ChildObject.BankDetails()
console.log(ChildObject.accountNumber)
ChildObject.deposit()
ChildObject.withdraw()
ChildObject.CallBalance()
//  454785663245// Money ha been Deposited// Monay has been Withdrawn// Bank details are listed // 454785663245// Money ha been Deposited// Monay has been Withdrawn
// how to access the protect property which is in parent class // protected balance = 15000
ChildObject.CallBalance()
// now to call the privatev propert in the parent class inside parent class //
//get AccHolder(){return this.accountHolder}// and called it with the method 

// we can also use static propert or method without crreating the object for the class, n call the statics using class name//

