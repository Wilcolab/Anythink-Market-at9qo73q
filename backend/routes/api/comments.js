/**
 * Express router for handling comment operations
 * @type {express.Router}
 */

/**
 * POST /api/comments/:postId
 * Creates a new comment for a specific post
 * @async
 * @param {string} postId - The ID of the post to comment on (from URL params)
 * @param {Object} req.body - Request body
 * @param {string} req.body.text - The comment text content (required)
 * @param {string} req.body.userId - The ID of the user posting the comment (required)
 * @returns {Object} 201 - The saved comment object with all fields including createdAt
 * @returns {Object} 400 - Error if text or userId is missing
 * @returns {Object} 500 - Internal server error
 */

/**
 * GET /api/comments/:postId
 * Retrieves all comments for a specific post, sorted by creation date (newest first)
 * @async
 * @param {string} postId - The ID of the post to fetch comments for (from URL params)
 * @returns {Array<Object>} 200 - Array of comment objects sorted by createdAt descending
 * @returns {Object} 500 - Internal server error
 */

/**
 * DELETE /api/comments/:commentId
 * Deletes a specific comment by its ID
 * @async
 * @param {string} commentId - The ID of the comment to delete (from URL params)
 * @returns {Object} 200 - Success message upon deletion
 * @returns {Object} 404 - Error if comment is not found
 * @returns {Object} 500 - Internal server error
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github copilot, can you help me with this code? I want to create a route that allows users to post comments on a specific post. The route should be a POST request to /api/comments/:postId, where :postId is the ID of the post the comment is associated with. The request body should contain the comment text and the user ID of the commenter. The route should save the comment to the database and return the saved comment in the response.

router.post("/:postId", async (req, res) => {
  const { postId } = req.params;
  const { text, userId } = req.body;

  if (!text || !userId) {
    return res.status(400).json({ error: "Text and userId are required" });
  }

  try {
    const newComment = new Comment({
      postId,
      text,
      userId,
      createdAt: new Date(),
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error("Error saving comment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//end another endpoint for deleting comments
router.delete("/:commentId", async (req, res) => {
    const { commentId } = req.params;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});