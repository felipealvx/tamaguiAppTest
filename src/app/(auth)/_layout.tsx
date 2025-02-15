import { Stack } from "expo-router"

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login"/>
      <Stack.Screen name="singup"/>
    </Stack>
  )
}

export default TabLayout;