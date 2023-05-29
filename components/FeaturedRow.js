import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResterauntCard from './ResterauntCard'
import sanityClient from "../sanity";

const FeaturedRow = ({id ,title, description}) => {
    const [resteraunts, setResteraunts] = useState([])

    useEffect(() => {
        sanityClient
          .fetch(
            `
        *[_type == "featured" && _id == $id] {
          ...,
          resteraunts[]->{
            ...,
            dishes[] ->,
            type-> {
              name
            }
              },
            }[0]
        `,
            { id }
          )
          .then((data) => {
            setResteraunts(data.resteraunts);
          });
      }, [id]);
    //   console.log(resteraunts)

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
            {resteraunts?.map((resteraunt) => (
          <ResterauntCard
            key={resteraunt._id}
            id={resteraunt._id}
            imgUrl={resteraunt.image}
            title={resteraunt.name}
            rating={resteraunt.rating}
            genre={resteraunt.type?.name}
            address={resteraunt.address}
            short_description={resteraunt.short_description}
            dishes={resteraunt.dishes}
            long={resteraunt.long}
            lat={resteraunt.lat}
          />
        ))}
           
        </ScrollView>
    </View>
  )
}

export default  FeaturedRow