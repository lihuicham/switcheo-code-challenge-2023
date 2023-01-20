import { ethers } from 'ethers';

const API_KEY: string = 'ZYSINASEZYV8YSR4HVEWYU288XDS8VZK5V';  // my binance app API KEY

// unsure whether this is the correct way to write binance provider 
const provider = new ethers.providers.JsonRpcProvider(`https://api.bscscan.com/&apikey=${API_KEY}`);  

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint256)",
];

const addresses: Array<string> = [   // an array of addresses to look up 
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
];

const swthAddress: string = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';  // SWTH Token Contract 
const contract = new ethers.Contract(swthAddress, ERC20_ABI, provider);

async function main() {

    for (let address of addresses) {
        const amount = await contract.balanceOf(address);
        console.log(`${address } ${ethers.utils.formatEther(amount)}`);
    }
}

main();