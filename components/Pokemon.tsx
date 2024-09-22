import { PokemeonDataType } from '@/app/Utils/@Types'
import React from 'react'
import { View, Text, StyleSheet, Platform, Image, useWindowDimensions, FlatList } from 'react-native'


export const Pokemon = ({ data }: { data: PokemeonDataType }) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;


    console.log(data)

    console.log(windowWidth, windowHeight)



    const style = StyleSheet.create({
        card: {
            backgroundColor: "white",
            borderRadius: 16,
            borderWidth: 2,
            padding: 16,
            width: windowWidth > 500 ? 550 : 350,
            marginLeft: 'auto',
            marginRight: 'auto',
            margin: 16,
            ...Platform.select({
                android: {
                    elevation: 5
                },
                ios: {
                    shadowColor: "#333",
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                }
            })
        },

        image: {
            width: '100%',
            height: 100,
            borderRadius: 100,
            resizeMode: 'contain'
        }
        ,
        nameContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 32,
        },

        nameText: {
            fontSize: 24,
            fontWeight: 'bold',
        },

        HP: {
            fontSize: 22,
        },

        typeContainer: {
            marginBottom: 40,
            alignItems: 'center',
        },
        badge: {
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 6,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        badgeText: {
            fontSize: 30,
            marginLeft: 12,
        },
        badgeEmoji: {
            fontSize: 22,
            fontWeight: "bold"
        },
        moveContainer: {
            marginBottom: 16,
        },

        moveText: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        weaknessContainer: {
            marginBottom: 8,
        },
        weaknessText: {
            fontSize: 15,
            fontWeight: 'bold',
        }

    })

    return (
        <FlatList
            data={data}
            renderItem={({ item, index }: any) => (
                <View style={style.card}>
                    <View style={style.nameContainer}>
                        <Text style={style.nameText}>{item.name}</Text>
                        <Text style={style.HP}>❤️{item.hp}</Text>
                    </View>
                    <View>
                        <Image
                            source={item.uri}
                            style={style.image}
                            accessibilityLabel={`${item.name} pokemon`}
                        />
                    </View>
                    <View style={style.typeContainer}>
                        <View style={item.borderColor}>
                            <Text style={style.badgeText}>Type: {item.emoji}</Text>
                            <Text style={style.badgeEmoji}>Type: {item.type}</Text>
                        </View>
                    </View>
                    <View style={style.moveContainer}>
                        <Text style={style.moveText}>Moves: {item.moves.join(', ')}</Text>
                    </View>
                    <View style={style.weaknessContainer}>
                        <Text style={style.weaknessText}>Weakness: {item.weaknesses.join(', ')}</Text>
                    </View>
                </View>
            )}
            keyExtractor={(item, index) => item.name || index.toString()}
            ListEmptyComponent={<View>No Item Found</View>}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />} 
            ListHeaderComponent={
                <Text style={{fontSize: 40, textAlign:"center"}}>PokemonList</Text>
            }
            ListFooterComponent={
                <Text style={{fontSize: 40, textAlign:"center",paddingBottom: 8}}>PokemonList enddd</Text>
            }
        />

    )
}
