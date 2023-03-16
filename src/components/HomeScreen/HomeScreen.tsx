import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Input,
  Stack,
  Center,
  NativeBaseProvider,
  extendTheme,
  Flex,
  Image,
  Spacer,
  Button,
} from 'native-base';

import Icons from 'react-native-vector-icons/FontAwesome';
import image from '../../../assets/images/sofa.png';

type Props = {};

export default function HomeScreen({navigation}: Props) {
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
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to Interia</Text>
      </View>

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

      <View style={styles.ImageContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.Heading}>Categories</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Shop');
            }}>
            <Text style={styles.Heading}>View all</Text>
          </TouchableOpacity>
        </View>
        <NativeBaseProvider theme={theme}>
          <Flex direction="row" flexWrap={'wrap'}>
            <View style={styles.Imagewrapper}>
              <View>
                <Image source={image} alt="Alternate Text" size="md" />
                <Text>Sofa</Text>
              </View>
            </View>
            <Spacer />
            <View style={styles.Imagewrapper}>
              <View>
                <Image source={image} alt="Alternate Text" size="md" />
                <Text>Sofa</Text>
              </View>
            </View>{' '}
            <View style={styles.Imagewrapper}>
              <View>
                <Image source={image} alt="Alternate Text" size="md" />
                <Text>Sofa</Text>
              </View>
            </View>{' '}
            <Spacer />
            <View style={styles.Imagewrapper}>
              <View>
                <Image source={image} alt="Alternate Text" size="md" />
                <Text>Sofa</Text>
              </View>
            </View>
          </Flex>
          <View style={styles.LiveContainer}>
            <Text style={styles.Heading}>Live View</Text>

            <Button _text={{color: 'white'}} mt={4} variant="interia">
              Open AR Designer
            </Button>
          </View>
        </NativeBaseProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Poppins',
  },
  textContainer: {
    padding: 16,
  },
  iconWrapper: {
    margin: 7,
    marginLeft: 15,
  },
  SearchbarContainer: {
    height: 40,
  },
  ImageContainer: {
    margin: 16,
    flex: 1,
  },
  Heading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Imagewrapper: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 164,
    height: 128,
    borderRadius: 8,
    marginTop: 16,
  },
  LiveContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: 10,
  },
});
