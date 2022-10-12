const express = require("express");

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
    .get((req, res) => {
        res.send("tools found");
    })
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
    .post((req, res) => {
        res.send("tools added");
    });

module.exports = router;
