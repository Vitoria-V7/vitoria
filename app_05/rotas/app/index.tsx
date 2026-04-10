import { View, Text, } from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/global';

export default function Index() {
    return (
        <View style={estilos.container}>
            <Text>Página Inicial</Text>
            <Link href="/detalhes" style={estilos.button}> Detalhes</Link>
        </View>
    )
}

