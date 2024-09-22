import { ImageSourcePropType } from "react-native";

export type PokemeonDataType ={
    name: string;
    uri: ImageSourcePropType | undefined;
    type: string;
    hp: number;
    moves: string[];
    weaknesses: string[];
    borderColor: string;
    emoji: string
}[]