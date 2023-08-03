import { Card, Box, Image, Heading } from '@chakra-ui/react'
import "../Components/Cards.css"




const Cards = (props) => {
    return (

        <Card className='card' >
            <Box className='imgBox'>
                <Image className='img' src={props.image} ></Image>
            </Box>
            <Heading mt="15px" as="h3" size="md">{props.heading}</Heading>

        </Card>


    )
}

export default Cards;