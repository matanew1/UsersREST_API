const ip = "localhost";
const port = process.env.PORT || 3000;
const url = `https://${ip}:${port}`;

const UserType = {
    ADMIN: 0,
    REGULAR: 1
}

const usersFilePath = './users.json';

module.exports = {
  ip,
  port,
  url,
  UserType,
  usersFilePath
};
