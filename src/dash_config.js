/*
class Configs
{
    CALORIES = {
        "BURGER" :   "550",
        "PIZZA" :   "300"
    }
}
*/

let Configs = {
    CALORIES: {
        BURGER:  550,
        PIZZA:  300
    },
    DELAY: {
        BURGER: 1.28,
        PIZZA: 1.25
    }
}

module.exports = Object.assign({}, Configs);
// module.exports = Configs;
// export default Configs;