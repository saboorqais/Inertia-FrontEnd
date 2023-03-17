import React from 'react';

import {
  Center,
  extendTheme,
  Flex,
  Heading,
  Image,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {Badge} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import image from '../../../assets/images/sofa.png';

export default function Product({route}: any) {
  console.log(route.params.categoryId);
  const theme = extendTheme({
    components: {
      Input: {
        opacitySearch: {
          opac: {
            opacity: 0.1,
          },
        },
      },
      Button: {
        variants: {
          interia: {
            backgroundColor: '#546CFF',
            borderRadius: 10,
            color: 'white',
          },
        },
      },
    },
  });
  return (
    <View style={styles.container} w={'full'}>
      <View style={styles.SearchbarContainer}>
        <NativeBaseProvider theme={theme}>
          <Center flex={1} px="3">
            <Stack space={4} w="100%" alignItems="center">
              <Input
                size={'2xl'}
                opacity={0.5}
                variant="rounded"
                InputLeftElement={
                  <View style={styles.iconWrapper}>
                    <Icons name="search" size={20} color="#546CFF" />
                  </View>
                }
                focusOutlineColor="#546CFF"
                placeholder="Search"
              />
            </Stack>
          </Center>
        </NativeBaseProvider>
      </View>
      <NativeBaseProvider theme={theme}>
        <View style={styles.headingContainer}>
          <Text style={styles.Heading}>Available Items</Text>
        </View>
        <Flex direction="column">
          <View style={styles.Imagewrapper}>
            <View style={styles.ImageContainer}>
              <View style={styles.ImageDiv}>
                <Image
                  source={image}
                  alt="Alternate Text"
                  size="md"
                  backgroundColor={'white'}
                  borderRadius={8}
                />
              </View>
              <Flex direction={'column'} style={styles.InformationContainer}>
                <Heading w={'full'} size={'sm'}>
                  Basic Sofa
                </Heading>
                <Text>Comfortable 1-seater sofa</Text>
                <Flex direction={'row'} justifyContent={'space-between'} width={'full'}>
                  <View style={styles.bottomContainer} >
                    <Badge rounded={'full'} height={5} colorScheme="error" />
                    <Badge rounded={'full'} height={5} colorScheme="green" />
                    <Badge rounded={'full'} height={5} colorScheme="yellow" />
                  </View>
                  <View>
                    <Text>PKR 23,000</Text>
                  </View>

                </Flex>
              </Flex>
            </View>
          </View>
        </Flex>
      </NativeBaseProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  SearchbarContainer: {
    margin: 17,
    height: 40,
  },
  iconWrapper: {
    margin: 7,
    marginLeft: 15,
  },
  Imagewrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    height: 128,
    borderRadius: 8,
  },
  ImageContainer: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 8,
  },
  ImageDiv: {
    padding: 10,
  },
  Heading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
  },
  headingContainer: {
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  InformationContainer: {
    width: '100%',
    margin: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
});
