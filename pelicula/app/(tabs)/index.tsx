import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import "@/app/global.css";
import SearchBar from "@/app/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchPopularMovies } from "@/services/api";
import MovieCard from "../components/MovieCard";

const headerImage = require("@/assets/images/encabezado.jpg");
const logo = require("@/assets/images/logo.png");

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: movieError,
  } = useFetch(() => fetchPopularMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={headerImage} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={logo} className="w-24 h-28 mt-20 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : movieError ? (
          <Text className="text-white">Error: {movieError?.message}</Text>
        ) : (
          <View className="flex flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeHolder="Search for a movie"
            />

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 15,
                  paddingRight: 5,
                  marginBottom: 10,
                  marginVertical: 15,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}