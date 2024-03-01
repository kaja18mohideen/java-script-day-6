class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, surgeMultiplier) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(distanceInKm, surge = 1) {
        const fareWithoutSurge = this.baseFare + (distanceInKm * this.costPerKilometer);
        const finalFare = fareWithoutSurge * surge * this.surgeMultiplier;
        return finalFare;
    }
}

const calculator = new UberPriceCalculator(5, 2, 1.5); 

const distance = 10; 
const surgeMultiplier = 1.5; 

const price = calculator.calculatePrice(distance, surgeMultiplier);
console.log("Estimated Uber price:", price);
