import { useState } from 'react'

import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Pools from '../../components/Pool/pools'
import {
  Box,
  Button,
  ButtonGroup,
  Spacer, Text, Center,
  Image, Flex,  HStack , chakra ,

} from '@chakra-ui/react'





function PoolsPage() {
  

  return (

   
<div>
<TopNav/>
<Pools />
<BottomNav/>
 </div>
  )
}

export default PoolsPage
