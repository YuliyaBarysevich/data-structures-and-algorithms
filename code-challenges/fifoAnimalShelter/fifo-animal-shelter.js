'use strict';

const Queue = require('../stacksAndQueues/lib/queue.js');

function Animal(type){
  this.type = type;
}


class AnimalShelter{
  constructor(){
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enque(animal){
    if(animal.type === 'dog'){
      this.dogs.enqueue(animal);
    } else if(animal.type === 'cat'){
      this.cats.enqueue(animal);
    } else{
      return 'false input';
    }
    return this;
  }

  dequeue(pref){
    if(pref === 'dog'){
      return this.dogs.dequeue();
    } else if(pref === 'cat'){
      return this.cats.dequeue();
    } else{
      return null;
    }
  }
}

module.exports = { Animal, AnimalShelter };