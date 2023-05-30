import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid'
import {  ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'

const ResterauntScreen = () => {
    const navigation = useNavigation()
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,  
        }
    } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            // title: title,
            // headerStyle: { backgroundColor: '#00CCBB' },
            // headerTitleStyle: { color: 'white' },
            // headerTintColor: 'white',
            // headerBackTitleVisible: false,
            headerShown: false,
        })
    }, [])
  return (
    <ScrollView>
        <View>
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className='w-full h-56 bg-gray-300 p-4 '
            />
            <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full ' >
                <ArrowLeftIcon size={20} color='#00CCBB' />
            </TouchableOpacity>
                 <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='text-3xl font-bold' > {title}</Text>
                        <View className='flex-row space-x-2 my-1 ' >
                            <View className='flex-row space-x-1 items-center'>
                                <StarIcon size={22} color='green' opacity={.5} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500' >{rating}</Text> . {genre}
                                </Text>
                            </View>
                        </View>
                        <View className="flex-row item-center space-x-1">
                  <MapPinIcon color="gray" opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-xs text-gray-500">
                      Nearby . {address}
                    </Text>
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4 ml-6">
                {short_description}
              </Text>
            <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300' >
                <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                <Text className='pl-2 flex-1 text-md font-bold'>Have a food allergy?</Text>
                <ChevronRightIcon color='#00CCBB' />
            </TouchableOpacity>
            </View>
            <View >
                <Text className='text-xl font-bold p-4'>Menu</Text>
                {/* dishRows */}

                {dishes.map((dish) => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image} 
                        />

                ))}
            </View>
          </View>
    </ScrollView>
  )
}
export default  ResterauntScreen
                        
                                
                                
                            