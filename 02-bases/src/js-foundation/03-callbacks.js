const users = [
  { id: 1, name: "Jhon Doe" },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const getUserByID = (id, callback) => {
  const user = users.find((user) => user.id === id);
  user ? callback(null, user) : callback(`USUARIO with ID ${id} not found`);
};

module.exports = {
  getUserByID,
};
