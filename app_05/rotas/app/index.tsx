import { View, Text, } from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/global';

export default function Index() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.title}>Página Inicial</Text>
            <Link style={estilos.button} href="/detalhes"> Detalhes</Link>
        </View>
    )
}

