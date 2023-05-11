import {
    Box, Center, extendTheme, Flex, Stack, HStack,VStack, SimpleGrid, Text, Input, Select, Button, background, } from '@chakra-ui/react'
    import { getAccount,getContract,readContract } from '@wagmi/core'
    import {
    ArrowDownIcon, ArrowUpIcon
    } from '@chakra-ui/icons'
      import { Link } from "react-router-dom";
import React ,{ useEffect, useContext,useState }from "react";
    import {abi} from "../../scripts/contracts/pool.json"
    import {} from "./pools.css"
    
    import fetchContract from '../../scripts/tokens'
    
    export function Pools() {

    var [owner, setOwner] = useState("")
    var [name, setName] = useState("")
    var [ totalSupply,setTotalSupply] = useState("")
    const account = getAccount()
    
    async function getOwner(){
        owner = await readContract({
            address: '0x1049cD39F9aB0CD9abe9dF16dB4cF882ea9dd918',
            abi: abi,
            functionName: 'getOwner'
            })
            setOwner(owner);
    }

    async function getName(){
        name = await readContract({
            address: '0x1049cD39F9aB0CD9abe9dF16dB4cF882ea9dd918',
            abi: abi,
            functionName: 'name'
            })
            setName(name);
    }

    // async function getTotalSupply(){
    //     totalSupply = await readContract({
    //         address: '0x1049cD39F9aB0CD9abe9dF16dB4cF882ea9dd918',
    //         abi: abi,
    //         functionName: 'totalSupply'
    //         })
    //     setTotalSupply(totalSupply);
    // }

    getOwner();
    getName();
    // getTotalSupply();













    return (
    
    <div >
    <body>
    <SimpleGrid columns={1} spacing={10}>
    <Box bg='transparent' height='100px'></Box>
    
    <Center>
    <Flex >
    <Text  p='1' fontSize='4xl' color='#C9E265'>Pools </Text> 
    
    </Flex>
    </Center>
    
    
    
    <Center>
    <table class="container">
    <thead>
    <tr>
    <th><h1>PoolName</h1></th>
    <th><h1>Owner</h1></th>
    <th><h1></h1></th>
    <th><h1></h1></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>{name}</td>
    <td>{owner}</td>
    <td><Link to="/swap" className="nav-router-link">
          <Button colorScheme="yellow"  size="lg">
            {/* Styling is applied to link in the css file */}
         
              {/* change url to /swap without causing the entire app reload */}
              {/* Always use Link tag instead of <a> tag */}
              Swap
          </Button>
             </Link></td>
    <td><Link to="/liquidity" className="nav-router-link">
          <Button colorScheme="linkedin"  size="lg" col>
            {/* Styling is applied to link in the css file */}
         
              {/* change url to /swap without causing the entire app reload */}
              {/* Always use Link tag instead of <a> tag */}
              Manage
          </Button>
             </Link></td>
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
    
    export default Pools