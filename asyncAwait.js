const API = {
    "food": ["potatoes", "rise", "fish", "meat"],
    deliveryTime(name) {
        if (name === 'potatoes') {
            return 20;
        } else if (name === 'rise') {
            return 35;
        } else if (name === 'fish') {
            return 29;
        } else if (name === 'meat') {
            return 22;
        } else {
            return null;
        }
    },
    isItAvailableFood(name) {
        for (const prop of this.food) {
            if (name === prop) {
                return true;
            }
        }
        return false;
    },
    isItValidTime(name, time) {
        if (this.isItAvailableFood(name)) {
            return time >= this.deliveryTime(name);
        } else {
            return false;
        }
    },

    price(name) {
        if (this.isItAvailableFood(name)) {


            if (name === 'potatoes') {
                return 3;
            } else if (name === 'rise') {
                return 2.80;
            } else if (name === 'fish') {
                return 7.90;
            } else if (name === 'meat') {
                return 6.80;
            }
        } else {
            return null;
        }

    },
    cancelOrder(name) {
        console.log('Your deliver (' + name + ') is not available. Your food is Missing or the expected delivery time is too short!!!');
    },
    placeOrder(name, quantity) {
        console.log(`Your delivery is : ${quantity} portion ${name}. It will cost ${(this.price(name)*quantity).toFixed(2)} leva.`);
    }
};


async function orderFood(name, quantity, expectedTime) {
    const available = await API.isItAvailableFood(name);
    if (!available) {
        return API.cancelOrder(name);
    }
    const validTime = await API.isItValidTime(name, expectedTime)
    if (!validTime) {
        return API.cancelOrder(name);
    }
    return API.placeOrder(name, quantity);
}

orderFood('potatoes', 9, 10);
orderFood('rise', 4, 36);
orderFood('kavurma', 7, 25);
orderFood('potatoes', 9, 10);
orderFood('rise', 4, 36);
orderFood('kavurma', 7, 25);