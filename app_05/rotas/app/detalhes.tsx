import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { estilos } from '@/constants/global';

export default function detalhes() {
    const router = useRouter();
    return (
        <View style={estilos.container}>
            <Text>Página de Detalhes</Text>
            <Link href="/login" style={estilos.button}> Sair</Link>
            <Button title='Realizar logout'
                onPress={() => { router.dismissAll(); router.replace("/login") }} />

        </View>
    )

}