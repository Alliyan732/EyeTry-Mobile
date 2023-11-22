import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {viewAllGlasses} from '../../services/Glasses/Glasses';

import Pressable from '../../wrapper_components/Pressable';

import GlassesFilterItem from '../../components/ui/GlassesFilterItem';

const properties = {
  colors: [
    'All',
    'Black',
    'Blue',
    'Brown',
    'Green',
    'Red',
    'Yellow',
    'Purple',
    'Orange',
    'White',
    'Transparent',
    'Silver',
  ],
  material: [
    'All',
    'Acetate',
    'Metal',
    'Stainless',
    'Steel',
    'Titanium',
    'Tr-90',
    'Plastic',
  ],
  frame_shape: [
    'All',
    'Aviatrix',
    'Cat eye',
    'Browline',
    'Oval',
    'Polygon',
    'Rectangle',
    'Round',
    'Square',
  ],
  face_shape: [
    'All',
    'Round',
    'Square',
    'Oval',
    'Heart-Shaped',
    'Diamond',
    'Rectangle/Long',
  ],
  gender: ['Male', 'Female', 'Kids'],
  rim: ['All Rims', 'Full Rim', 'Rim Less', 'Semi Rim'],
  size: ['All', 'Small', 'Medium', 'Large', 'Extra Large'],
  categories: ['All', 'Eyeglasses', 'Sunglasses', 'Men', 'Women', 'Kids'],
};

const GlassesFilter = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen, options) => {
    navigation.navigate(screen, options);
  };

  const [glasses, setGlasses] = useState([]);
  const [filteredGlasses, setFilteredGlasses] = useState([]);

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

  const [colors, setColors] = useState([]);
  const [material, setMaterial] = useState([]);
  const [frameShape, setFrameShape] = useState([]);
  const [faceShape, setFaceShape] = useState([]);
  const [gender, setGender] = useState([]);
  const [rim, setRim] = useState([]);
  const [size, setSize] = useState([]);
  const [categories, setCategories] = useState([]);

  const updateState = (category, setterFunc, currentList) => {
    const categoryIndex = currentList.indexOf(category);
    let newCategories = [...currentList];

    if (categoryIndex === -1) {
      newCategories = [...newCategories, category];
    } else {
      newCategories.splice(categoryIndex, 1);
    }

    setterFunc(newCategories);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="my-10">
          <GlassesFilterItem
            title="Categories"
            property={properties.categories}
          />
          <GlassesFilterItem title="Colors" property={properties.colors} />
          <GlassesFilterItem title="Materials" property={properties.material} />
          <GlassesFilterItem
            title="Frame Shape"
            property={properties.frame_shape}
          />
          <GlassesFilterItem
            title="Face Shape"
            property={properties.face_shape}
          />
          <GlassesFilterItem title="Gender" property={properties.gender} />
          <GlassesFilterItem title="Rim" property={properties.rim} />
          <GlassesFilterItem title="Size" property={properties.size} />
        </View>
        <View className="my-10">
          <Pressable className="flex flex-row justify-center items-center mx-10 h-16 border rounded-md">
            <Text className="text-black text-xl font-bold">Search Filter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GlassesFilter;
