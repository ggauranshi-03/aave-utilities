
const Trade = async(req,res)=>{
    
};

module.exports = {Trade};

// let url1 = "https://api.1inch.exchange/v3.0/1/approve/spender";
// let url2 = "https://api.1inch.exchange/v3.0/1/tokens";

// console.log(url1);

// const address_spender = await fetch(url1)`enter code here`
// .then( res => res.json() )
// .then( data => {
//     console.log(data);
//     return data 
// });


// let url3 = "https://api.1inch.exchange/v3.0/1/approve/calldata?amount="+amount+"&tokenAddress="+selected_coin;
// console.log("URL3 before tp");
// console.log(url3);
// const transactionParameters = await fetch(url3)
// .then( res => res.json() )
// .then( data1 => {
//     console.log("url3 ");
//     console.log(data1);
//     const transactionParameters = {

//         to: data1['to'], // Required except during contract publications.
//         from: user_address[0], // must match user's active address.
        
//         value: "0", 
//         data: data1['data']
         
//     };
//     return transactionParameters
// });
// try {
//     const txHash = await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParameters],
//     });
//     let data = txHash.data;

// } catch (error) {
//     if (error.code === 4001) {
//         alert("User denied transaction signature.")
//     } else {
//         alert(error)
//     }
// }
