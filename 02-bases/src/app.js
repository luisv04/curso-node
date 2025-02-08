const { getUserByID } = require("./js-foundation/03-callbacks");

const user = getUserByID(2, (error, user) => {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});
