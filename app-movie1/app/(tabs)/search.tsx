import { fetchPopularMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const headerImage= require("@/assets/images/encabezado.jpg")
const logo = require("@/assets/images/logo.png");

const SearchScreen = () => {
const[searchQuery,setSearchQuery]= useState("");

const {
  data:movies,
  loading,
  error,
  refetch:loadMovies,
  reset,
}=useFetch(()=>fetchPopularMovies({query:searchQuery}),false);

useEffect(()=>{
  const timeoutID=setTimeout( async()=>{
    if (searchQuery.trim()){
      await loadMovies();
    }else{
      reset();
    }
  },500);
  return()=>clearTimeout(timeoutID)  
},[searchQuery]);

return(
  <View className="flex-1 bg-primary p-5 pb-10 ">
    <Image   
      source={headerImage}
      className='absolute w-full z-0'
      resizeMode='cover'
    />
    <FlatList 
      data={movies}
      renderItem={({item})=><MovieCard{...item}/>}
      keyExtractor={(item)=>item.id.toString()}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent:"flex-start",
        gap:15,
        marginVertical:15,
      }}
      contentContainerStyle={{
        paddingBottom:100,
      }}
      ListHeaderComponent={
        <>
        <View className='w-full flex-row justify-center items-center'>
          <Image source={logo} className='w-24 h-28 mt-20 mx-auto'/>
        </View>
        <View className='my-5'>
          <SearchBar
                placeHolder="Search for a movie"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        {loading&&(
          <ActivityIndicator
          size="large"
          color={"#0000ff"}
          className="my-3"   
          />
        )}
        {error&&(
          <Text className="text-red-500 px-5 my-3">
            Error:{error.message}
          </Text>
        )}

        {!loading && !error && searchQuery.trim() && movies?.length > 0 &&(
          <Text className="text-xl text-white" >
            search Result for {""}
            <Text className='text-accent'> {searchQuery}</Text>
          </Text>
        )}
        </>
      }
      ListEmptyComponent={
        !loading && !error?(
          <View className='mt-10 px-5'>
            <Text className='text-center text-gray-400'>
              {searchQuery.trim()? "No movie found" :"Search for a movie"}
            </Text>
          </View>
        ): null
      }
    />
    </View>
  );
};

export default SearchScreen

const styles = StyleSheet.create({})