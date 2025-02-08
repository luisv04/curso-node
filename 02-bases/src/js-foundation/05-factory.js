const { getUUID, getAge } = require("../plugins");

const obj = { name: "Luis angel", birthdate: "1992-08-04" };

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  };
};

const data = buildPerson(obj);

console.log(data);
