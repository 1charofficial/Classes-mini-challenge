//This is a class for a car park, the function/mehtod will allow the user 
//to be charged, based on their registration number and number of hours parked. The cost per hour
//is £1.50

//*The first car entered the car park, parked for 5 hours
//and ready is then ready to pay. Display this information so the driver
//can pay for his/her parking fee.*


//Create a class called Car

class Car2 {
    constructor(reg, numHours) {
        this.reg = reg;
        this.numHours = numHours;
        this.employee = 'full-time';
        this.status = true;

    }
     
    compliments() { 

        console.log(`Hello, I hope you enjoyed your stay with Char's Cars`);
           
        }
          
    payment() {
        console.log(`Car registration, ${this.reg} is now ready for payment.`);
        
    }

    total() {     

        let amount = this.numHours*1.5;
        console.log(`Please pay, ${amount}. thank you.` );
    
    }
}


//Creating new instances of to the class Car2.

const kobeCar = new Car2 ('CDDC', 5);
const shakCar = new Car2 ('RBBG', 6);
const mikeCar2 = new Car2 ('ABBC', 3);

//Calling the functions on the class objects.
kobeCar.compliments()
kobeCar.payment()
kobeCar.total()



//An extension of the class Car2 

class VipPark extends Car2 {
    constructor(reg, numHours, vipPass) {
        super(reg, numHours);
        this.employee = 'full-time';
        this.status = true;
        this.vipPass = vipPass;


    }
    
}

//creating new instances for the inherited class VipPark

const ronaldoCar = new VipPark ('ZVVK', 10, true,);
const messiCar = new VipPark ('STTP', 7, true);

//Calling the functions on the class objects.
ronaldoCar.compliments()
ronaldoCar.payment()
ronaldoCar.total()





