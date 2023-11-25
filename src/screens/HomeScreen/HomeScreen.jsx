import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  raybanImages,
  gucciImages,
  exclusiveCollectionImages,
  eyewearsCollectionImages,
  headerCollectionImages,
} from '../../data/HomeScreenGlassesProperties';

import {viewAllGlasses} from '../../services/Glasses/Glasses';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen, options) => {
    navigation.navigate(screen, options);
  };

  const [glasses, setGlasses] = useState([]);

  const fetchGlassess = async () => {
    try {
      const fetchAllGlasses = await viewAllGlasses();
      setGlasses(fetchAllGlasses);
    } catch (error) {
      console.error('Error fetching glasses', error);
    }
  };

  useEffect(() => {
    fetchGlassess();
  }, []);

  const filterByGender = gender => {
    const filteredGlasses = glasses.filter(glass => {
      return glass.person_information.genders.includes(gender);
    });

    handleNavigation('Glasses', {filteredGlasses: filteredGlasses});
  };

  const filterByManufacturer = manufacturer => {
    const filteredGlasses = glasses.filter(glass => {
      return glass.manufacturer === manufacturer;
    });

    handleNavigation('Glasses', {filteredGlasses: filteredGlasses});
  };

  const filterByType = type => {
    const filteredGlasses = glasses.filter(glass => {
      return glass.type === type;
    });

    handleNavigation('Glasses', {filteredGlasses: filteredGlasses});
  };

  const filterByExclusive = () => {
    const filteredGlasses = glasses.filter(glass => {
      return glass.type === 'Sunglasses';
    });

    // get the Product ID of the latest sunglasses added to the store
    const productId = filteredGlasses[0]._id;

    handleNavigation('Product', {productId: productId});
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="">
          <View className="flex flex-row gap-10">
            <FlatList
              data={headerCollectionImages}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => filterByManufacturer('Ray-Ban')}
                  style={{width: width}}
                  className="flex flex-col justify-center items-center bg-white h-52">
                  {/* <Text className="text-xl text-white pt-10">{item.text}</Text> */}
                  <Image
                    style={{width: width}}
                    className="h-60 object-cover"
                    resizeMode="contain"
                    source={item.image}
                  />
                </Pressable>
              )}
            />
          </View>
        </View>
        <View className="flex flex-row justify-evenly items-center mt-5">
          <Pressable
            onPress={() => filterByGender('Male')}
            className="flex flex-row justify-center items-center border px-10 py-3 rounded-lg">
            <Text className="text-black">Men</Text>
          </Pressable>
          <Pressable
            onPress={() => filterByGender('Female')}
            className="flex flex-row justify-center items-center border px-10 py-3 rounded-lg">
            <Text className="text-black">Women</Text>
          </Pressable>
          <Pressable
            onPress={() => filterByGender('Kids')}
            className="flex flex-row justify-center items-center border px-10 py-3 rounded-lg">
            <Text className="text-black">Kids</Text>
          </Pressable>
        </View>
        {/* <View>
          <View className="flex flex-row justify-center items-center gap-5 pt-5">
            <View
              style={{width: width / 2.3}}
              className="flex flex-col justify-center items-center h-48 bg-orange-600 rounded-lg shadow-lg shadow-black/50">
              <Text className="text-xl text-white pt-10">Eyeglasses</Text>
              <Image
                className="w-28 h-28 object-cover"
                resizeMode="contain"
                source={require('../../assets/home_screen/person_1.png')}
              />
            </View>
            <View
              style={{width: width / 2.3}}
              className="flex flex-col justify-center items-center h-48 bg-orange-600 rounded-lg shadow-lg shadow-black/50">
              <Text className="text-xl text-white pt-10">Sunglasses</Text>
              <Image
                className="w-28 h-28 object-cover"
                resizeMode="contain"
                source={require('../../assets/home_screen/person_1.png')}
              />
            </View>
          </View>
          <View className="flex flex-row justify-center items-center gap-5 pt-5">
            <View
              style={{width: width / 2.3}}
              className="flex flex-col justify-center items-center h-48 bg-orange-600 rounded-lg shadow-lg shadow-black/50">
              <Text className="text-xl text-white pt-10">Eyeglasses</Text>
              <Image
                className="w-28 h-28 object-cover"
                resizeMode="contain"
                source={require('../../assets/home_screen/person_1.png')}
              />
            </View>
            <View
              style={{width: width / 2.3}}
              className="flex flex-col justify-center items-center h-48 bg-orange-600 rounded-lg shadow-lg shadow-black/50">
              <Text className="text-xl text-white pt-10">Sunglasses</Text>
              <Image
                className="w-28 h-28 object-cover"
                resizeMode="contain"
                source={require('../../assets/home_screen/person_1.png')}
              />
            </View>
          </View>
        </View> */}
        <View className="mt-5">
          <Text className="text-black pl-5 mb-5 text-xl uppercase font-light">
            Raybans Collections
          </Text>
          <View className="flex flex-row gap-10">
            <FlatList
              data={raybanImages}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => filterByManufacturer('Ray-Ban')}
                  className="flex flex-col justify-center items-center w-52 h-64 mr-5 rounded-lg shadow-lg shadow-black/50">
                  <Image
                    className="w-52 h-64 object-cover rounded-md"
                    resizeMode="cover"
                    source={item.image}
                  />
                </Pressable>
              )}
            />
          </View>
        </View>
        <View className="mt-5">
          <Text className="text-black pl-5 mb-5 text-xl uppercase font-light">
            Exclusive
          </Text>
          <View className="flex flex-row gap-10">
            <FlatList
              data={exclusiveCollectionImages}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => filterByExclusive()}
                  style={{width: width - 20}}
                  className="flex flex-col justify-center items-center rounded-lg mr-5 shadow-lg shadow-black/50">
                  {/* <Text className5"text-xl text-white pt-10">{item.text}</Text> */}
                  <Image
                    style={{width: width - 20}}
                    className="h-80 object-cover rounded-md"
                    resizeMode="contain"
                    source={item.image}
                  />
                </Pressable>
              )}
            />
          </View>
        </View>
        <View className="my-5">
          <Text className="text-black pl-5 mb-5 text-xl uppercase font-light">
            Eyewears Collections
          </Text>
          <View className="flex flex-row gap-10">
            <FlatList
              data={eyewearsCollectionImages}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => filterByType('Eyewears')}
                  className="flex flex-col justify-center items-center w-52 h-64 mr-5 rounded-lg shadow-lg shadow-black/50">
                  <Image
                    className="w-52 h-64 object-cover rounded-md"
                    resizeMode="cover"
                    source={item.image}
                  />
                </Pressable>
              )}
            />
          </View>
        </View>
        <View className="my-5">
          <Text className="text-black pl-5 mb-5 text-xl uppercase font-light">
            Gucci Collections
          </Text>
          <View className="flex flex-row gap-10">
            <FlatList
              data={gucciImages}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => filterByManufacturer('Gucci')}
                  className="flex flex-col justify-center items-center w-52 h-64 mr-5 rounded-lg shadow-lg shadow-black/50">
                  <Image
                    className="w-52 h-64 object-cover rounded-md"
                    resizeMode="cover"
                    source={item.image}
                  />
                </Pressable>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
