const customersOrder = [];

class Orders{
  
    menu = [
    {dish: "Big Mac", price: 3.00},
    {dish: "Chicken Nuggets", price: 2.45},
    {dish: "Fries", price: 1.00},
    {dish: "Soda", price: 0.99},
    {dish: "Apple Pie", price: 1.25},
    {dish: "Quarter Pounder", price: 4.00},
    {dish: "Salad", price: 2.00},
    {dish: "Ice Cream", price: 1.50},
    {dish: "Milkshake", price: 1.10}
];

  addItemToBasket(customers_choice){
    const allDishes = this.menu.map(menuItem => menuItem.dish);

    if (allDishes.includes(customers_choice)) {
      customersOrder.push(customers_choice);
    } else {
      throw 'Error item not on menu';
    }
  };
}
