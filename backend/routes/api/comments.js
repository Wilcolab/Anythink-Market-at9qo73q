/**
 * Express router for managing comments API endpoints
 * @type {Router}
 */

/**
 * Retrieves all comments from the database
 * @async
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} 500 - Internal server error if database query fails
 */

/**
 * Creates a new comment in the database
 * @async
 * @route POST /
 * @param {Object} req - Express request object
 * @param {string} req.body.text - The comment text content
 * @param {string} req.body.author - The author of the comment
 * @returns {Promise<void>} 201 - JSON object of the newly created comment
 * @throws {Error} 400 - Bad request if text or author is missing
 * @throws {Error} 500 - Internal server error if database save fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Add another endpoint to create a new comment
router.post("/", async (req, res) => {
    const { text, author } = req.body;
    if (!text || !author) {
        return res.status(400).json({ message: "Text and author are required" });
    }
    try {
        const newComment = new Comment({ text, author });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});