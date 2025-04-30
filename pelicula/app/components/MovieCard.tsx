import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Result } from "@/interfaces/tmdb.interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
//import { ShowRating } from "./ShowRaiting";

const MovieCard = ({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
  overview,
  backdrop_path,
}: Result) => {
  // const moviePicture = require{};

  return (
    <Link
      href={{
        pathname: "/movies/[id]",
        params: {
          id,
          title,
          overview,
          backdrop_path,
          release_date,
          vote_average,
        },
      }}
      asChild
    >
      <TouchableOpacity
        className="flex-1"
        onPress={() => {
          console.log({ title });
        }}
      >
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "http://placehold.co/600x400/1a1a1a/ffffff.png",
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
  );
};

export default MovieCard;

const styles = StyleSheet.create({});