'use strict';

const { Animal, AnimalShelter } = require('../fifo-animal-shelter');



const dog = new Animal('dog');
const cat = new Animal('cat');

describe('Animal Shelter', () => {
  it('should successfully enqueue an animal into a shelter', () => {
    let shelter = new AnimalShelter();

    shelter.enque(dog);
    shelter.enque(cat);
    shelter.enque(cat);
    expect(shelter.dogs.front).toEqual(1);
    expect(shelter.cats.front).toEqual(2);
  });

  it('should successfully dequeue out of a queue the expected animal', () => {
    let shelter = new AnimalShelter();

    shelter.enque(dog);
    shelter.enque(dog);
    shelter.enque(cat);
    expect(shelter.dequeue('cat').type).toEqual('cat');
  });

  it('should successfully dequeue out of a queue the expected animal', () => {
    let shelter = new AnimalShelter();

    shelter.enque(dog);
    shelter.enque(dog);
    shelter.enque(cat);
    expect(shelter.dequeue('dog').type).toEqual('dog');
    expect(shelter.dogs.front).toEqual(1)
  });

  it('should return NULL if animal is not "dog" or "cat"', () => {
    let shelter = new AnimalShelter();

    shelter.enque(dog);
    shelter.enque(dog);
    shelter.enque(cat);
    expect(shelter.dequeue('cow')).toBe(null);
  });
});