import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
    StarIcon,
    MapPinIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline"

const RestaurantScreen = () => {

    const navigation = useNavigation();

    const { params: {
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
    } } = useRoute();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    console.log("Img URL>>>>>>>>>" + urlFor(imgUrl).url())


    return (
        <ScrollView>
            <View className="relative ">
                <Image
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            >
                <ArrowLeftIcon size={20} color="#00CCBB" />
            </TouchableOpacity>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon size={22} color="green" opacity={0.5} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon size={22} color="gray" opacity={0.4} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">Nearby . {rating}</Text>
                            </Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('PreparingOrderScreen')} className="rounded-lg bg-[#00CCBB] p-3 my-2 mx-20">
                    <Text className="text-white text-center font-bold text-lg">
                        Order Now
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView >
    )
}

export default RestaurantScreen