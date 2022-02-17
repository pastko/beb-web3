const router = require('express').Router();
const { web } = require('../contract/getInfura');

router.get('/', (req, res)=>{
    res.json({ msg : "ok"});
})

router.post('/infura',async(req,res)=>{
    await web.setInfura(res);
})

router.post('/ganache',async(req,res)=>{
    await web.setGanache(res);
})


router.get('/balance', async (req,res,next)=>{
    let account = req.query.account
    console.log(account);
    await web.getBalance(account, res);
})

router.get('/balance', async (req,res,next)=>{
    let account = req.query.account
    console.log(account);
    await web.getBalance(account, res);
})

router.get('/accounts', async (req,res,next)=>{
    await web.getAccounts(res);
})


module.exports = router;