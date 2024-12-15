import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogBox } from "react-native";
import "react-native-reanimated";

LogBox.ignoreAllLogs(true);

// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <StatusBar style="light" />
    <Stack>
      /* Include index.tsx as a standalone screen */
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </>
  );
}
