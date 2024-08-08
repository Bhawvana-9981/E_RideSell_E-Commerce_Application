import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Hary',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Hary',
        email: 'jane@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
];

export default users;