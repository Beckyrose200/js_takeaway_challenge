describe ('Orders', function(){

  it('Sees the list of dishes with prices', function(){
    order = new Orders();
    expect(order.menu).toContain["Big Mac"];
  });

   it('Allows customers to select which dish they want', function(){
     order = new Orders()
     order.addItemToBasket("Big Mac")
     expect(customersOrder[0]).toEqual["Big Mac"]
   })
   it('Only allows a customer to order a dish on the menu', function(){
     order = new Orders()
     expect(() => {order.addItemToBasket("severed head")}).toThrow('Error item not on menu');
   });
});