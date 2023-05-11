import web3 from "web3";
import abi from "./contracts/tokens.json"
import { ethers } from "ethers";

const fetchContract = (signerOrProvider,address) =>
  new ethers.Contract(
    address,
    abi,
    signerOrProvider
  );

// export async function connectContract() {
//     try {
//         const res = await checkUser(userName);
//         // if (res==undefined){
//         //     return console.error("User Not Found");  
//         // }
//         const json = JSON.parse(res)
//         const private_key = JSON.stringify(json[0].private_key).replace(/[""]/g, '')
//         // console.log("res",JSON.stringify(private_ke))
//         const provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_RPC_ENDPOINT)
//         // console.log("provider",provider);
//         const signer = new ethers.Wallet(private_key, provider)
//         // console.log("signer",signer);
//         const contract = await new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);
//         console.log('Connection with contract Done')
//         return { contract }
//     } catch (error) {
//         console.log('Something went wrong while connecting with contract')
//     }
// }

export async function token() {

const fetchContract = (signerOrProvider,address) =>
  new ethers.Contract(
    address,
    abi,
    signerOrProvider
  );
}

export default {
    fetchContract
};
