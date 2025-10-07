const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = require("../models/UserModel");

//Adding new user
const newUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' })
    }
    
    try {
        const existingUser = await UserSchema.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserSchema({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        await user.save();

        const userInfo = { user: { id: user._id } };
        const token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ 
            message: 'User created successfully', 
            token,
            id: { id: user.id, name: user.firstName, email: user.email } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
};

//Logging in the user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required!' });
    }

    try {
        const user = await UserSchema.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials, try again!' });
        }

        const matchingPassword = await bcrypt.compare(password, user.password);
        if (!matchingPassword) {
            return res.status(401).json({ message: 'Invalid password!' });
        }

        const userInfo = { user: { id: user._id } };
        const token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ 
            message: 'User created successfully', 
            token,
            id: { id: user.id, name: user.firstName, email: user.email } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//Getting all users
const getUsers = async (req, res) => {
    try {
        const users = await UserSchema.find({});
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json({ message: "Retrieved users successfully", users: users });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    newUser,
    loginUser,
    getUsers
};