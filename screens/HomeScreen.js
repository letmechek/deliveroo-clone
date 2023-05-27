import { Text, View, SafeAreaView, Image, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import { TextInput } from 'react-native';

import FeaturedRow from '../components/FeaturedRow';
import Categories from '../components/Catagories';



const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
   
    return (
      <SafeAreaView className='bg-white pt-5'>
        {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
                <Image source={{
                    uri: "https://links.papareact.com/wru",
                }}
                    className="h-7 w-7 bg-gray-300 rounded-full "
                />
                <View className='flex-1'>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>
                <UserIcon size={35} color='#00CCBB' />
            </View>
                {/* Search */}
                <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color='gray' size={20}/>
                    <TextInput placeholder='resteraunts and cuisines'
                    keyboardType='default'/>
                    </View>
                <AdjustmentsHorizontalIcon color='#00CCBB'/>
                </View>

               {/* Body */}
              
        <ScrollView>
                {/* Categories */}
               <Categories/>
                {/* Featured rows */}
                <FeaturedRow
                    id='1' 
                    title='Featured'
                    description='paid placements from our partners'
                    
                />
                {/* tast discounts */}
                <FeaturedRow
                    id='12' 
                    title='tast discounts'
                    description='paid placements from our partners'
                    
                />
                {/* offers near you  */}
                <FeaturedRow
                    id='123' 
                    title='offers near you'
                    description='paid placements from our partners'
                    
                />
                

               </ScrollView>
        </SafeAreaView>
)
}
export default HomeScreen

        






