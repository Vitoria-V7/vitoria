import { View, Text, } from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/global';

export default function login() {
    return (
        <View style={estilos.container}>
            <Text>Página de login</Text>
            <Link href="/login" style={estilos.button}> Login</Link>

        </View>
    )
}
