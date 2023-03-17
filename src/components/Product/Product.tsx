import React from 'react';

import {
  Center,
  extendTheme,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

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
    <View style={styles.container} w={'full'} h={600}>
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
});
