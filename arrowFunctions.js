function Person(name) {
    this.name = name;
    this.age = 0;

    setInterval(() => {
        if (this.age <= 99) {
            console.log(`${this.name} is  ${this.age} years old!`);
            this.age++;
        }

    }, 1000)
}
new Person('Sofi');


const FCLevski = {
    coach: 'G. Todorov',
    boss: 'Sirakov',
    captain: 'Goranov',
    budgetCoach: 3000,
    budgetBoss: 10000,
    budgetCaptain: 7000,
    budgetForThem: function() {
        console.log(`${this.coach} has ${this.budgetCoach} leva salary`);
        console.log(`${this.boss} has ${this.budgetBoss} leva salary`);
        console.log(`${this.captain}has ${this.budgetCaptain} leva salary`);
        console.log(`The all money for them is ${this.budgetCoach+this.budgetBoss+this.budgetCaptain} leva`)
    }
}
FCLevski.budgetForThem();