const express = require("express");
const toolsControllers = require("../../controllers/tools.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();

/* router.get("/", (req, res) => {
    res.send("tools found");
});

router.post("/tools", (req, res) => {
    res.send("tools added");
}); */

// ----------------------------------------------------

router
    .route("/")
    /**
     * @api {get} /tools All tools
     * @apiDescription Get all tools
     * @apiPermission admin
     *
     * @apiHeader {string} Authorization User's access token
     *
     * @apiParam {Number {1-}}.............. [page=1] List page
     * @apiParam {Number {1-100}} .......... [limit=10] Users per page
     *
     * @apiSuccess {object[]} all the tools.
     *
     * @apiError {Unauthorized 401} Unauthorized - Only authenticated user can access
     * @apiError {Unauthorized 403} Forbidden  -  Only admins  can access the data
     */
    .get(toolsControllers.getAllTools)
    /**
     * @api {post} /save a tool
     * @apiDescription Save a tool
     * @apiPermission admin
     *
     * @apiHeader {string} Authorization User's access token
     *
     * @apiParam {Number {1-}}.............. [page=1] List page
     * @apiParam {Number {1-100}} .......... [limit=10] Users per page
     *
     * @apiSuccess {object[]} all the tools.
     *
     * @apiError {Unauthorized 401} Unauthorized - Only authenticated user can access
     * @apiError {Unauthorized 403} Forbidden  -  Only admins  can access the data
     */
    .post(toolsControllers.saveATool);

// router.route("/:id").get(viewCount, limiter, toolsControllers.getToolDetails);
router
    .route("/:id")
    .get(viewCount, toolsControllers.getToolDetails)
    .patch(toolsControllers.updateTool)
    .delete(toolsControllers.deleteTool);

module.exports = router;
