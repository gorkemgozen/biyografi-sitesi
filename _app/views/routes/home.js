const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("main", { 
        title: "Ana Sayfa", 
        content: "pages/anasayfa"
    });
});

module.exports = router;
