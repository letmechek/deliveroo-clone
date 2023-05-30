import React, { useState } from 'react'
import Currency from 'react-currency-format'
import { View, Text, TouchableOpacity } from 'react-native'
import { urlFor } from '../sanity'
import { Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

export default function DishRow({id, name, description, price, image}) {
    const [isPressed, setIsPressed] = useState(false)
  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${
        isPressed && 'border-b-0'
    }`}>
        <View className='flex-row'>
        <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            
                {/* <Currency quantity={price} currency='USD' /> */}
                <Text className='text-gray-400'>${price}</Text>
                
        </View>
        <View className='flex-row '>
            <Image 
                style={{
                    borderWidth: 1,
                    borderColor: '#F3F3F4',
                }}
                source={{
                    uri: urlFor(image).url()
                }}
                className='w-20 h-20 bg-gray-300 p-4'
            />
        </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View className='bg-white px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity>
                <MinusCircleIcon size={40} color='#00CCBB' />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
                <PlusCircleIcon size={40} color='#00CCBB' />
            </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}



