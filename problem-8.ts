{
    class Car {
        constructor(
            public brand: string,
            public model: string,
            public year: number
        ) { }

        displayInfo() {
            console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`);
        }
    }

    // Sample Input:
    const info = new Car("Toyota", "Corolla", 2020);
    info.displayInfo();
}