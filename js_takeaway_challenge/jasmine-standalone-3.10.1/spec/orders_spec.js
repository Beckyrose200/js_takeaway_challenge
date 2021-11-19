describe ('Orders', function(){

  it('Sees the list of dishes with prices', function(){
    order = new Orders()
    console.log(order.menu)
    expect(order.menu).toContain["Big Mac"]
  });
});