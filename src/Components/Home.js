import { Box, Card, Center, Container, Flex, Image, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "../Components/Home.css"
import Cards from "../Components/Cards.js"
import server from "../Images/server.png"
import shield from "../Images/shield.png"
import microphone from "../Images/microphone.png"
import appicon from "../Images/ui-design.png"
import globe from "../Images/globe.png"


const Home = () => {
  return (
    <>
      <Box className='container' w="100%" h="45vh" >
        <Box className='overlay' w="100%" h="45vh"></Box>
      </Box>

      <Flex w="80%" m="2px auto">

        <Cards image={server} heading={"Cloud Techonology"} />
        <Cards image={shield} heading={"Security Technology"} />
        <Cards image={microphone} heading={"Voice"} />
        <Cards image={appicon} heading={"Application Service"} />



      </Flex>

      <Box textAlign="center" mt="120px">
        <Heading color="#223ad5" as="h3" size="md">Our Expertise | Your Success</Heading>
        <Heading w="85%" m="10px auto" mt="30px" textAlign="center" as='h1' size='2xl' >
          We are a Full-Services MSP focused on Cloud, Security, IoT, and Datacenter Technologies.
        </Heading>
        <Text w="85%" m="20px auto" textAlign="center" fontSize='2xl'>We align our expertise and experience with the goals of our customers to help them build stronger and more innovative businesses. Investment in our people, process, and leading technologies have resulted in offerings for our customers to realize their objectives.</Text>
  
      </Box>

      <Box>
        <Image className='globeImg'  m="20px auto" w="520px" src={globe}> 

        </Image>
      </Box>


    </>

  )
}

export default Home
