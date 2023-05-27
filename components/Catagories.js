import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

 const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop:10,
    }}
    horizontal 
    showsHorizontalScrollIndicator>
        {/* CategoryCard */}
        <CategoryCard
         imgUrl='https://links.papareact.com/gn7'
          title='testing'
          />
        <CategoryCard  
        imgUrl='https://links.papareact.com/gn7'
         title='testing'
         />
        <CategoryCard  
        imgUrl='https://links.papareact.com/gn7'
         title='testing'
         />
        <CategoryCard
         imgUrl='https://links.papareact.com/gn7'
          title='testing'
          />
        <CategoryCard  
        imgUrl='https://links.papareact.com/gn7'
         title='testing'
         />
        <CategoryCard  
        imgUrl='https://links.papareact.com/gn7'
         title='testing'
         />
    </ScrollView>
  )
}

export default Categories
       
        