import {View, Text, StyleSheet, Image } from 'react-native';
import{Input } from '@/components/input';

export default function Index() {
    return (
        <View style={style.container}>
            <Image style={style.img} source={require("@/assets/Coca-Cola_logo.svg.png")} />
            <Text style={style.titulo}>Log In</Text>
            <Input/>
        </View>
        

    )

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    titulo: {
        fontSize: 32,
        fontWeight: 900
    },
    img: {
        width: '100%'
    }
})