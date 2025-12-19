

// TODO 1- Abstraction 


   /* class Car {
       #fuel=100;

        #burnFuel=function(){
            this.#fuel-=1;
        }

        start(){
            this.#burnFuel()
             console.log(`Car is Starting...`)

        }
    }

    const buggati = new Car('bugati');
    buggati.start()
    console.log(buggati)
*/

    // TODO 2- Encapsulation

    /* class BankAccount {
                    #balance = 1000;
                
                constructor(holderName, balance=100) {
                    this.holderName=holderName;
                    this.#balance=balance;
                } 
                deposit(balance){
                    this.#balance+=balance;
                }
                widraw(balance){
                    this.#balance -= balance;
                }
                setbalance=function(balance){
                    console.log(`Balance set successfully..`)
                    this.#balance=balance;
                   }
                getBalance=function(){
                        return this.#balance;
                }
            }

        const rohitAccount = new BankAccount('Rohit Kumar',300);
            rohitAccount.setbalance(300);
        console.log(rohitAccount)
        */

    // TODO 3- Inheritance 
    /*
     class Car{
            constructor( brand,color ) {
                this.brand=brand;
                this.color=color;
            }

            start = function(){ 
                console.log(`${this.brand} Car is starting... `)
            }

            stop = function() {
            console.log(`${this.brand} Car is Stopping... `)

            }
     }

     class electricCar extends Car{
         constructor(brand,color, battery) {
             super(brand,color); 
             
             this.battery=battery;
            }

            charging = function(){
                console.log(`${this.brand} is Charging...`)
            }
     }

     const eCar = new electricCar('Tesla','white')
    //  console.log(eCar)
    //  eCar.charging();
    //  eCar.start();
    //  eCar.stop();


    const car_1 = new Car('Mercidies','sky-blue',67);
    console.log(car_1)
  
    */


// TODO 4- Polymorphism 

   /*
    class MediaPlayer {

        play() {
            console.log(`Play Media`)
        }

    }

    class Music extends MediaPlayer {
        play(){
            console.log(`Play Music`)
        }
    }

    class Video extends MediaPlayer {
        play() {
            console.log(`Play Video`)
        }
    }


const ob1 = new Music();
ob1.play();
const ob2 = new Video();
ob2.play();
const ob3 = new MediaPlayer();
ob3.play();

*/