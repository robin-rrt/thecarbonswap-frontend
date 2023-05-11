import { useState } from 'react'

import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import TokenBox from '../../components/Tokens'

import {
  Box,
  Button,
  ButtonGroup,
  Spacer, Text, Center,
  Image, Flex,  HStack , chakra ,

} from '@chakra-ui/react'





function Tokens() {
  

  return (

   
    <div className="tokens">

<TopNav/>
<TokenBox />
<BottomNav/>

    </div>
  )
}

export default Tokens
