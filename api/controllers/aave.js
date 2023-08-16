const ethers = require("ethers");
const {
  UiPoolDataProvider,
  UiIncentiveDataProvider,
  ChainId,
} = require("@aave/contract-helpers");
const markets = require("@bgd-labs/aave-address-book");
const All = require("@aave/math-utils");
const formatReservesAndIncentives = All.formatReservesAndIncentives;
const dayjs = require('dayjs');

const Data = async(req,res)=>{
  // Sample RPC address for querying ETH mainnet
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.public.blastapi.io"
);

// User address to fetch data for, insert address here
const currentAccount = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";

// View contract used to fetch all reserves data (including market base currency data), and user reserves
// Using Aave V3 Eth Mainnet address for demo
const poolDataProviderContract = new UiPoolDataProvider({
  uiPoolDataProviderAddress: markets.AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
  provider,
  chainId: ChainId.mainnet,
});

// View contract used to fetch all reserve incentives (APRs), and user incentives
// Using Aave V3 Eth Mainnet address for demo
const incentiveDataProviderContract = new UiIncentiveDataProvider({
  uiIncentiveDataProviderAddress:
    markets.AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
  provider,
  chainId: ChainId.mainnet,
});

async function fetchContractData() {
    // Object containing array of pool reserves and market base currency data
    // { reservesArray, baseCurrencyData }
    const reserves = await poolDataProviderContract.getReservesHumanized({
      lendingPoolAddressProvider: markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
    });

    // Object containing array or users aave positions and active eMode category
    // { userReserves, userEmodeCategoryId }
    const userReserves = await poolDataProviderContract.getUserReservesHumanized({
      lendingPoolAddressProvider: markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      user: currentAccount,
    });

    // Array of incentive tokens with price feed and emission APR
    const reserveIncentives =
      await incentiveDataProviderContract.getReservesIncentivesDataHumanized({
        lendingPoolAddressProvider:
          markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      });

    // Dictionary of claimable user incentives
    const userIncentives =
      await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized({
        lendingPoolAddressProvider:
          markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
        user: currentAccount,
      });

    // console.log({ reserves, userReserves, reserveIncentives, userIncentives });

    const reservesArray = reserves.reservesData;
    const baseCurrencyData = reserves.baseCurrencyData;

    const currentTimestamp = dayjs().unix();

    const formattedPoolReserves = formatReservesAndIncentives({
      reserves: reservesArray,
      currentTimestamp,
      marketReferenceCurrencyDecimals:
        baseCurrencyData.marketReferenceCurrencyDecimals,
      marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
      reserveIncentives,
    });

    console.log(formattedPoolReserves);
    res.send(formattedPoolReserves);
}

fetchContractData();
}
// export default Data;
module.exports = {Data};
