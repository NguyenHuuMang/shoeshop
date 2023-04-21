import bcrypt from 'bcryptjs';

const users = [
    {
        _id: "1",
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
  ];
  
  export default users;
  