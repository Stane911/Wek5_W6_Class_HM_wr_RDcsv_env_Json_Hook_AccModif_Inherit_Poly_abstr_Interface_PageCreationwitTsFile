

// Access modifier with Encaptulation and Single Inheritance


export class BankAccount   
{
public accountNumber:Number=454785663245
private accountHolder: string ="Stane"
protected balance:number = 15000

deposit(){console.log("Money ha been Deposited")}
withdraw(){console.log("Monay has been Withdrawn")}
get AccHolder(){return this.accountHolder}
}

let AC=new BankAccount()

console.log(AC.accountNumber)
AC.deposit()
AC.withdraw()
console.log(AC.AccHolder)
