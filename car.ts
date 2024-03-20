class Car {
    protected make: string;
    protected model: string;
  
    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
    }
  
    public getCarInfo(): string {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  }

  
  const car = new Car("Toyota", "Camry");
  console.log(car.getCarInfo());  // Output: Make: Toyota, Model: Camry
  