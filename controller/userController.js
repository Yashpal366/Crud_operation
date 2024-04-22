import User from "../modal/userModal.js";

export const fetch = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(users)
    } catch (error) {

    }
}

export const create = async (req, res) => {
    try {
        const userData = new User(req.body)
        const saveUser = await userData.save();
        res.status(200).json(saveUser)

    } catch (error) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: "User not found" })
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({ updatedUser })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}


export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: "User not found" })
        }
        await User.findByIdAndDelete(id)
        res.status(201).json({message:"User delete successfully"})
      
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}