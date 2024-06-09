const person = {
  name: "Arat",
  age: 39,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();

const hobbies = ["Spriritual", "Surfing"];
for (let hobbie of hobbies) {
  console.log(hobbie);
}

// change array wiith new one without changing the original one
console.log(hobbies.map((hobby) => "Hobby:" + hobby));
console.log(hobbies);

const copiedArray = hobbies.slice();
//using spread operator
const copiedArray1 = [...hobbies];
console.log(copiedArray1);

//REST operator
const restOperator = (...args) => {
  return args;
};

console.log(restOperator(1, 2, 3, 4));

// destructuring
const printname = ({ name }) => {
  console.log(name);
};

const { name, age } = person;

printname(person);
