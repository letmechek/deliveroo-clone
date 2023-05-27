import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResterauntCard from './ResterauntCard'

const FeaturedRow = ({title, description}) => {
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon  color='#00CCBB'/>
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>
        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'>
            {/* resteraunt cards */}
            <ResterauntCard/>
        </ScrollView>
    </View>
  )
}

export default  FeaturedRow