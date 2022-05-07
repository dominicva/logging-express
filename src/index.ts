type Person = {
  name: string;
  age: number;
};

function Person(name: string, age: number): Person {
  return {
    name,
    age,
  };
}

const me = Person('Dom', 30);
