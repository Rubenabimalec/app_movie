import { Result } from "@/interfaces/tmbd.interface.js";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const MovieCard=({
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
    backdrop_path,

}:Result)=>{
    return(
        <Link
            href={{
                pathname:"/movies/[id]",
                params:{
                    id:id.toString(),
                    title,
                    overview,
                    backdrop_path,
                    release_date:release_date.toString(),
                    vote_average:vote_average.toString(),
                },
            }}
            asChild
            >
            <TouchableOpacity
                className="flex-1"
                onPress={()=>{
                    console.log({title},{id},{overview});
                }}
            >
                <Image
                    source={{
                        uri:poster_path
                        ?`${IMAGE_URL}${poster_path}`
                        :"http://placehold.co/600x400/1a1a1a/ffffff.png",
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-white" numberOfLines={1}> 
                    {title}
                </Text>
                <View className="flex-row justify-between">
                    <Text className="text-white">{release_date.split("-")[0]}</Text>
                    <Text className="text-white">Movie</Text>     
                </View>
            </TouchableOpacity>
        </Link>



    )
}
export default MovieCard;
const styles = StyleSheet.create({});