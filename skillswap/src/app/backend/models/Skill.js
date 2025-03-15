const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    category: String,  // Example: "Web Development", "Graphic Design"
    title: String,     // Example: "I can teach JavaScript"
    description: String,
    user: String,      // Example: "John Doe"
    contact: String,   // Example: "john@example.com"
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Skill", SkillSchema);
