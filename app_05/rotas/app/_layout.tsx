import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="detalhes" options={{ title: 'detalhes' }} />
      <Stack.Screen name="login" options={{ title: 'entrar' }} />


    </Stack>
  )
}