
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

module.exports = {Tokens};
