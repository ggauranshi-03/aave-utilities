const express = require("express");
const router = express.Router();
const AaveControllers = require("../controllers/aave.js");

router.get("/",async(req,res)=>{
    res.send("hello");
})
router.get("/aave",AaveControllers.Data);

module.exports = router;
// export default router;