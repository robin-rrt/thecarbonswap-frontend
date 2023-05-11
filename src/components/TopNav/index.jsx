import { ConnectButton } from '@rainbow-me/rainbowkit'
// import { mainnet, goerli } from '@wagmi/core'

import {
  Box,
  Button,
  Center,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

function TopNav() {

  return (

   
    <Box  bgGradient='linear(to-b,#c9e26561, #000000)' height='90px' width='100%'>
      <Stack spacing={400} direction="row">

      <Link to="/" className="nav-router-link">
        <Image
          height="90px"
          src=".\src\assets\images\logo2.jpeg"
          alt="c02 icon"
        />
        </Link>
<Center>


<Stack spacing={1} direction="row"  >
        <Stack spacing={0} direction="row" >
      
        
          
          <Link to="/swap" className="nav-router-link">
          <Button colorScheme="transparent"  size="lg">
            {/* Styling is applied to link in the css file */}
         
              {/* change url to /swap without causing the entire app reload */}
              {/* Always use Link tag instead of <a> tag */}
              Swap
          </Button>
             </Link>

             <Link to="/tokens" className="nav-router-link">
          <Button colorScheme="transparent"  size="lg">
            {/* Styling is applied to link in the css file */}
         
              {/* change url to /swap without causing the entire app reload */}
              {/* Always use Link tag instead of <a> tag */}
              Tokens
          </Button>
             </Link>

          <Link to="/pools" className="nav-router-link">
          <Button colorScheme="transparent" size="lg">
          [carbon]Pools
          </Button>
          </Link>

          <Link to="/dashboard" className="nav-router-link">
          <Button colorScheme="transparent" size="lg">
            Dashboard
          </Button>
          </Link>

        </Stack>
        <Center>

        <Flex gap={200}>
          <Box/>
        </Flex>
        </Center>
        </Stack>
        </Center>

      
       

        
        
        <ConnectButton />
      </Stack>
      
    </Box>

    

  );
}

export default TopNav;
