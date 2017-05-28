import Ember from 'ember';

export default Ember.Service.extend({

  // Function that returns all the orders
  getOrders(){
    return [
      {id: '1', name: 'Brian'},
      {id: '2', name: 'Perla'},
    ]
  },

  getOrderById(id){
    const orders = this.getOrders();
    return orders.findBy('id',id)
  }

});
