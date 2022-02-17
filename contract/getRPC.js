const Web3 = require('web3');
let web3 = ''

function setInfura(res){
    const rpcURL = "https://ropsten.infura.io/v3/10beb53a2a13401dbabe47dd9d9195af";
    web3 = new Web3(rpcURL);
    if(web3 != ''){
        res.json({msg: "web3 rpc setting success for infura"});
    }else{
        res.json({msg: "web3 setting Error"});
    }
}

function setGanache(res){
    web3 = new Web3('http://localhost:7545')
    // web3 = new Web3.providers.HttpProvider('http://localhost:7545')
    if(web3 != ''){
        res.json({msg: "web3 rpc setting success for ganache"});
    }else{
        res.json({msg: "web3 setting Error"});
    }
}


function getBalance(account, res) {
    if (web3 != '') {
        web3.eth
            .getBalance(account)
            .then((bal) => web3.utils.fromWei(bal, 'ether'))
            .then((eth) => {
                console.log(`지갑 ${account}의 잔액은 ... ${eth}입니다.`);
                res.json({msg : `지갑 ${account}의 잔액은 ....  ${eth}입니다.` });
            })
    } else {
        console.log("web3 is not setting");
        res.json({msg : 'web error'})
    }
}


function getTransaction(txId) {
    if (web3 != '') {
        web3.eth.getTransaction(txId)
            .then((obj) => {
                console.log(obj);
            })
    } else {
        console.log("web3 is not setting")
    }
}


function getBlock(blockId) {
    if (web3 != '') {
        web3.eth.getBlock(blockId)
            .then((obj) => {
                console.log(obj);
            })
    } else {
        console.log("web3 is not setting")
    }
}


function getAccounts(res){
    if(web3 != ''){
        web3.eth.getAccounts().then((acc)=>{
            res.json({data : acc});
        })
    }else{
        res.json({msg : 'web error'})
    }
}

exports.web = {
    setGanache,
    setInfura,
    getBalance,
    getBlock,
    getTransaction,
    getAccounts
}
