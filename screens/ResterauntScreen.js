import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

export default function ResterauntScreen() {
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
        </View>
    </ScrollView>
  )
}
