const users = [
  {
    name: "도엽",
    point: 20,
  },
  {
    name: "규옥",
    point: 100,
  },
  {
    name: "혜지",
    point: 40,
  },
  {
    name: "하영",
    point: 30,
  },
];

const reducer = (acc, obj) => acc + obj.point;
console.log(users.reduce(reducer, 0));
