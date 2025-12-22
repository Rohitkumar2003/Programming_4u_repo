// TODO: Prototype Inheritance 

function BankAccount(cardHolderName,balance) {
        this.cardHolderName = cardHolderName;
        this.balance = balance;
}

BankAccount.prototype.deposit = function(balance){
            this.balance += balance;
}   

BankAccount.prototype.widrawl = function(balance){
            this.balance -= balance;
        }

console.log(BankAccount.prototype);

const rohitAccount = new BankAccount('Rohit Kumar', 100);
        rohitAccount.deposit(200);
        rohitAccount.widrawl(50);
        console.log(`Rohit Account Details`, rohitAccount)

    const NeerajAccount = new BankAccount('Neeraj Kumar', 2000);
            NeerajAccount.deposit(300);
            NeerajAccount.widrawl(120);
    console.log(`Neeraj Account Details`,NeerajAccount)

    // TODO- Class Constructor Function 

            class isStudent{
                constructor(name,age) {
                    this.name=name;
                    this.age=age;   
                } 
                introduceMySelf(){ 
                    console.log(`Hey My Name is ${this.name}, and Age ${this.age}`)
                }
            }

        const newStudent = new isStudent('Rohit',23);
        console.log(newStudent)

