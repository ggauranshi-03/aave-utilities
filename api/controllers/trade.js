const axios = require('axios');
const Tokens = async(req,res)=>{
    const apiUrl = 'https://api.1inch.dev/swap/v5.2/1/tokens';
    const authToken = 'YHIkhFVEk5PyshRZy5i9zboVDHk8A0Bm'; 

    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    fetch(apiUrl, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(error => {
      res.send(error);
      console.error('Fetch error:', error);
    });
};
const Quote =  async(req,res)=>{
    
    // const src= req.src || 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    // const dst = req.dst || 0x111111111117dc0aa78b770fa6a738034120c302;
    // const amount = req.amount * 1e18 || 10000000000000000;
    // const src= "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    // const dst = "0x111111111117dc0aa78b770fa6a738034120c302";
    // const amount = "10000000000000000";
    // const apiUrl = `https://api.1inch.dev/swap/v5.2/1/quote?src=${src}&dst=${dst}&amount=${amount}`
    const apiUrl = "https://api.1inch.dev/swap/v5.2/1/quote?src=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&dst=0x111111111117dc0aa78b770fa6a738034120c302&amount=10000000000000000";
    const authToken = 'YHIkhFVEk5PyshRZy5i9zboVDHk8A0Bm'; 

    const headers = {
      Authorization: `Bearer ${authToken}`
    };

    axios.get(apiUrl, { headers })
    .then(response => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch(error => {
      res.json(error);
      console.error('Axios error:', error);
    });

}
module.exports = {Tokens,Quote};
