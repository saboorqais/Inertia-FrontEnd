import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Center, Container, Heading, Image, VStack, Text, HStack, Badge, Button } from 'native-base';
import image from '../../../assets/images/sofa.png'
const ProductPage = () => {
    return (
        <VStack flex={1} bg="white" space={4} alignItems="center" w={"full"} >
            <Container w="full" h="200"
                mt={10}
                style={{ backgroundColor: "#F3F3F3" }}
                rounded={"md"}
                alignItems="center"
                justifyContent={"center"}
            >

                <Image
                    source={image}
                    alt="Alternate Text"
                    size="70%"
                    backgroundColor={'#F3F3F3'}
                    borderRadius={8}
                />

            </Container>
            <VStack pr={35} pl={35}>
                <Heading color={"#313131"}>Basic Info</Heading>
                <Text color={"#959595"}>Comfortable 1-seater sofa with xyz texture and available in multiple colours, this information will be updated with real product information.</Text>
            </VStack>
            <Container w="full" h="60"
                style={{ backgroundColor: "#F3F3F3" }}
                rounded={"md"}
                alignItems="center"
                justifyContent={"center"}
            >
                <HStack w={"full"} justifyContent={"space-between"} pr={2} pl={2}>
                    <Heading size={"md"} color={"#313131"}>Available Colors</Heading>
                    <View style={styles.bottomContainer}>
                        <Badge
                            rounded={'full'}
                            height={5}
                            colorScheme="error"
                        />
                        <Badge
                            rounded={'full'}
                            height={5}
                            colorScheme="green"
                        />
                        <Badge
                            rounded={'full'}
                            height={5}
                            colorScheme="yellow"
                        />
                    </View>
                </HStack>


            </Container>
            <Container w="full" h="60"
                style={{ backgroundColor: "#F3F3F3" }}
                rounded={"md"}
                alignItems="center"
                justifyContent={"center"}
            >
                <HStack w={"full"} justifyContent={"space-between"} pr={2} pl={2}>
                    <Heading size={"md"} color={"#313131"}>Basic Price</Heading>
                    <View style={styles.bottomContainer}>
                        <Text color={"#313131"}>PKR 23,000
                        </Text>
                    </View>
                </HStack>


            </Container>
            <View style={styles.LiveContainer}>
                <Button _text={{ color: 'white' }} mt={4} variant="interia">
                    Add to Cart
                </Button>
                <Button _text={{ color: 'white' }} mt={4} variant="interia">
                    Open AR Designer
                </Button>
            </View>



        </VStack>

    )
}

export default ProductPage


const styles = StyleSheet.create({
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
    },
    LiveContainer: {
        width: "100%",
        paddingLeft: 35,
        paddingRight: 35,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    Heading: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
    },
});
