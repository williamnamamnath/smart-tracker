const UserSchema = require("../models/UserModel")
const bcrypt = require('bcryptjs');

//Adding new user
exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' })
    }

    try {
        const existingUser = await UserSchema.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' })
        }

        const user = new UserSchema({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        await user.save()
        res.status(201).json({ message: 'User created successfully', id: user._id })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error })
    }
}

//Logging in the user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required!' });
    }

    try {
        const user = await UserSchema.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        res.status(200).json({ message: 'Login successful', id: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

//Getting all users
exports.getUsers = async (req, res) => {
    try {
        const users = await UserSchema.find({});
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};