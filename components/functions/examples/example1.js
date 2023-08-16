const winnie = {
  age: 70,
  dead: true,
  name: "Winnie",
  surname: "Mandela",
  relatives: {
    children: ["Zindzi", "Zenani"],
    husband: "Nelson",
  },
};

const children = winnie.relatives.children;
const husband = winnie.relatives.husband;

for (let i = 0; i < children.length; i++) {
  console.log(children[i]);
}

console.log(husband);
