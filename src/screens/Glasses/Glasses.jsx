import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {Dimensions} from 'react-native';

import Pressable from '../../wrapper_components/Pressable';

import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

import API_URL from '../../config/config';

import {viewAllGlasses} from '../../services/Glasses/Glasses';
import {
  viewAllWishlistsProducts,
  createWishlistProduct,
  removeWishlistProduct,
} from '../../services/Wishlist/Wishlist';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Glasses = () => {
  const navigation = useNavigation();

  const handleNavigation = screen => {
    navigation.navigate(screen);
  };

  const [glasses, setGlasses] = useState([]);
  const [wishlists, setWishlists] = useState({});

  const fetchGlassess = async () => {
    try {
      const fetchAllGlasses = await viewAllGlasses();
      setGlasses(fetchAllGlasses);
    } catch (error) {
      console.error('Error fetching glasses', error);
    }
  };

  const fetchAllWishlistProducts = async () => {
    try {
      const fetchAllWishlists = await viewAllWishlistsProducts();
      setWishlists(fetchAllWishlists);
    } catch (error) {
      console.error('Error fetching wishlist', error);
    }
  };

  const handleAddFavorite = async productId => {
    try {
      const response = await createWishlistProduct(productId);
      fetchAllWishlistProducts();
    } catch (error) {
      console.error('Error adding favorites', error);
    }
  };

  const handleRemoveFavorite = async productId => {
    try {
      const response = await removeWishlistProduct(productId);
      fetchAllWishlistProducts();
    } catch (error) {
      console.error('Error removing favorite', error);
    }
  };

  useEffect(() => {
    fetchGlassess();
    fetchAllWishlistProducts();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={glasses}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          const isFavorite =
            wishlists.wishlist &&
            wishlists.wishlist.some(product => product._id === item._id);

          return (
            <View className="">
              <View className="flex">
                {isFavorite ? (
                  <Pressable onPress={() => handleRemoveFavorite(item._id)}>
                    <View className="flex flex-row justify-end mr-10 mt-10">
                      <Icon name="heart" size={30} color="#9f1239" />
                    </View>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => handleAddFavorite(item._id)}>
                    <View className="flex flex-row justify-end mr-10 mt-10">
                      <Icon name="hearto" size={30} color="#fecaca" />
                    </View>
                  </Pressable>
                )}

                {item.frame_information.frame_variants.length > 0 && (
                  <View className="flex flex-row justify-center items-center">
                    <Image
                      style={{width: width}}
                      className="h-60 object-cover"
                      resizeMode="contain"
                      source={{
                        uri:
                          API_URL +
                          item.frame_information.frame_variants[0].images[0],
                      }}
                    />
                  </View>
                )}
              </View>
              <View className="flex flex-row justify-between mx-5">
                <View className="flex flex-col">
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    className="text-black text-[18px]">
                    {item.name}
                  </Text>
                  <Text className="text-black">{item.sku}</Text>
                </View>
                {/* <View className="flex flex-row">
                <Text className="text-black text-[18px]">
                  {item.priceInfo.currency + ' ' + item.priceInfo.price}
                </Text>
              </View> */}
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Glasses;
