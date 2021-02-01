// const hamburger = new Hamburger(SIZE_SMALL);
// // добавка из майонеза
// hamburger.addTopping(TOPPING_MAYO);
// hamburger.addTopping(TOPPING_POTATO);

// console.log("Price with sauce: “ + hamburger.getPrice());
// console.log("Callories with sauce: “ + hamburger.getCallories());

class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._toppings = [];
    }

    addTopping(topping) {
        if (!this._toppings.includes(topping)) {
            return this._toppings.push(topping);
        };
    }

    get getToppings() {
        return this._toppings;
    }

    get getSize() {
            return this._size;
        }

    get getPrice() {
        const priceArr = this._toppings.map(x => Hamburger.TOPPINGS[x].price);
        priceArr.push(Hamburger.SIZES[this._size].price);
        const price = priceArr.reduce((acc, prices) => acc + prices, 0);
        return price;
    }

    get getCallories() {
        const caloriesArr = this._toppings.map(x => Hamburger.TOPPINGS[x].calories);
        caloriesArr.push(Hamburger.SIZES[this._size].calories);
        const calories = caloriesArr.reduce((acc, itemcalories) => acc + itemcalories, 0);
        return calories;
    }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_SMALL = 'SIZE_MEDIUM';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 50,
        calories: 20,
    },
     [Hamburger.SIZE_MEDIUM]: {
        price: 75,
        calories: 30,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 100,
        calories: 40,
    }
};

Hamburger.TOPPING_CHEESE = "TOPPING_CHEESE";
Hamburger.TOPPING_SALAD = "TOPPING_SALAD";
Hamburger.TOPPING_POTATO = "TOPPING_POTATO";
Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_NONE]: {
        price: 0,
        calories: 0,
    },
    [Hamburger.TOPPING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.TOPPING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.TOPPING_POTATO]: {
        price: 35,
        calories: 15,
    },
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_NONE);

console.log(" Price with sauce: ", hamburger.getPrice);
console.log(" Callories with sauce: ", hamburger.getCallories);

