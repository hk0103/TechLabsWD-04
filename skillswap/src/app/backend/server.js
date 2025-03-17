const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");


// ✅ POST: Add a new skill
router.post("/", async (req, res) => {
    try {
        const { category, title, description, user, contact, subcategory } = req.body;
        if (!category || !title || !description || !user || !contact) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newSkill = new Skill({ category, title, description, user, contact, subcategory });
        await newSkill.save();
        res.status(201).json(newSkill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ GET: Fetch all skills
router.get("/", async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ GET: Fetch skills by category
router.get("/:category", async (req, res) => {
    try {
        const skills = await Skill.find({ category: req.params.category });
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

