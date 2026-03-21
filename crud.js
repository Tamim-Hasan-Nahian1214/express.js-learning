const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Tamim", city: "Dhaka" },
    { id: 2, name: "Azmain", city: "Dhaka" },
    { id: 3, name: "Jilani", city: "Dhaka" }
];

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id); 
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found!"
        });
    }
    res.status(200).json({
        success: true,
        data: user
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});