import {
Box, Center, extendTheme, Flex, Stack, HStack,VStack, SimpleGrid, Text, Input, Select, Button, background, } from '@chakra-ui/react'
import { getAccount,getContract,readContract } from '@wagmi/core'
import {
ArrowDownIcon, ArrowUpIcon
} from '@chakra-ui/icons'
import React ,{ useEffect, useContext,useState }from "react";
import {abi} from "../../scripts/contracts/tokens.json"
import {} from "./token.css"

import fetchContract from '../../scripts/tokens'

export function TokenBox() {
    var [owner, setOwner] = useState("")
    var [name, setName] = useState("")
    var [ BCTtotalSupply,setBCTTotalSupply] = useState("")

	var [owner, setOwner] = useState("")
    var [name, setName] = useState("")
    var [ NCTtotalSupply,setNCTTotalSupply] = useState("")

	var [owner, setOwner] = useState("")
    var [name, setName] = useState("")
    var [ MCO2totalSupply,setMCO2TotalSupply] = useState("")
const account = getAccount()

async function getBCTtotalSupply(){
	BCTtotalSupply = await readContract({
		address: '0xC0a957D9ce9c230541Bcb82653838d619a85fB1f',
		abi: abi,
		functionName: 'totalSupply'
		})
		setBCTTotalSupply (BCTtotalSupply.toString())
}
async function getNCTtotalSupply(){
	 NCTtotalSupply = await readContract({
		address: '0xC0a957D9ce9c230541Bcb82653838d619a85fB1f',
		abi: abi,
		functionName: 'totalSupply'
		})
		setNCTTotalSupply(NCTtotalSupply.toString())
}

async function getMCO2totalSupply(){
	MCO2totalSupply = await readContract({
		address: '0xC0a957D9ce9c230541Bcb82653838d619a85fB1f',
		abi: abi,
		functionName: 'totalSupply'
		})
		setMCO2TotalSupply(MCO2totalSupply.toString())
		
}


// async function getName(_address){
// 	name = await readContract({
// 		address: '0xC0a957D9ce9c230541Bcb82653838d619a85fB1f',
// 		abi: abi,
// 		functionName: 'name'
// 		})
// 		console.log("name",name);
// 		setName(name);
// }

// async function getTotalSupply(){
//     totalSupply = await readContract({
//         address: '0x1049cD39F9aB0CD9abe9dF16dB4cF882ea9dd918',
//         abi: abi,
//         functionName: 'totalSupply'
//         })
//     setTotalSupply(totalSupply);
// }
//   useEffect(() => {
//     setOwner('0x29F9084a21C9ADdccC8e03d72E53D0aF932a1b7b').then((owner) => {
//       setOwner(owner)
//     });
//   });
// setOwner('0x29F9084a21C9ADdccC8e03d72E53D0aF932a1b7b');
getBCTtotalSupply()
getNCTtotalSupply()
getMCO2totalSupply()
// setName();
return (

<div >
<body>
<SimpleGrid columns={1} spacing={10}>
<Box bg='transparent' height='100px'></Box>

<Center>
<Flex >
<Text  p='1' fontSize='4xl' color='#C9E265'>Tokens </Text> 
<Text p='1' fontSize='4xl' color='#C9E265'> [carbon] </Text>

</Flex>
</Center>



<Center>
<table class="container">
<thead>
<tr>
<th><h1>Tokens</h1></th>
<th><h1>Owner</h1></th>
<th><h1>TotalSupply</h1></th>
</tr>
</thead>
<tbody>
<tr>
<td>BCT</td>
<td>{account.address}</td>
<td>{BCTtotalSupply}</td>
</tr>
<tr>
<td>NCT</td>
<td>{account.address}</td>
<td>{NCTtotalSupply}</td>
</tr>
<tr>
<td>MCO2</td>
<td>{account.address}</td>
<td>{MCO2totalSupply}</td>
</tr>
</tbody>
</table>
{/* </Box> */}
</Center>
<Box bg='transparent' height='190px'></Box>
</SimpleGrid>
</body>
</div>)
}

export default TokenBox