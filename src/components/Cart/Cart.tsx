import { View } from 'react-native'
import React from 'react'
import { HStack, Heading, VStack ,Text} from 'native-base'

const Cart = () => {
    return (
        <VStack flex={1} style={{
            backgroundColor: 'white',
        }}>
            <HStack ml={5} mr={5} mt={5} justifyContent={"space-between"}>
                <Heading style={{ color: 'black' }}>Items</Heading>
                <Text style={{ color: 'black' }}>2</Text>
            </HStack>
        </VStack>
    )
}

export default Cart