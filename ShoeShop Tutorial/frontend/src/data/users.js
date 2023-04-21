import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
        createAt: "Oct 17, 2022"
    }
  ];
  
  export default users;
  