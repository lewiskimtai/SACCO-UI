import { SubtlePrism } from '@/constants/Icons'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoanRequest = () => {
  return (
    
          <ImageBackground source={SubtlePrism} style={styles.background}>
            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.container}>
                </View>
                </SafeAreaView>
                </ImageBackground>
  )
}

export default LoanRequest

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 4,
  },
});