const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("main", { 
        title: "Hakkımda", 
        content: "pages/hakkimda"
    });
});

module.exports = router;
