import { Pokemon } from "@/components/Pokemon";
import { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, Platform,ScrollView } from "react-native";
import { PokemonArrays } from "./Utils/dataContent";
import { PokemeonDataType } from "./Utils/@Types";
export default function Index() {
  const [data, SetData] = useState<PokemeonDataType | []>([])
  const style = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#F5F5f5",
      padding: Platform.OS === "android" ? 25 : 0,
    }
  })
  console.log(data)

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Pokemon data={PokemonArrays} />
      </ScrollView>
    </SafeAreaView>
  );


}
