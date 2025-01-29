import { IconTicket } from "@tabler/icons-react-native";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {colors} from "@/styles/theme"
import { style } from "./style";

export type PlaceProps = {
    id: string;
    name: string;
    description: string;
    cupons: number;
    cover: string;
    address: string;
}

type Props = TouchableOpacityProps & {
    data: PlaceProps;
}

export function Place({data, ...rest}: Props) {
    return (
        <TouchableOpacity style={style.container} {...rest}>
            <Image style={style.image} source={{uri: data.cover}}/>

            <View style={style.content}>
                <Text style={style.name}></Text>
                <Text style={style.description}></Text>

                <View style={style.footer}>
                    <IconTicket  size={16} color={colors.red.base}/>
                    <Text style={style.tickets}>cupons disponíveis</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}