const express = require("express");
const router = express.Router();
const TradeControllers = require("../controllers/trade.js");

// router.get("/",async(req,res)=>{
//     res.send("hello");
// })
router.get("/tokens",TradeControllers.Tokens);
router.get("/quote",TradeControllers.Quote);

module.exports = router;
// export default router;