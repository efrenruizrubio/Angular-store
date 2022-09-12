const username: string = '1';

const sum = (a: number, b: number) => {
  console.log('test');
  return a + b;
};

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const person = new Person(22, 'Ruíz');
