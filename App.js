
import { StyleSheet, Text, View } from 'react-native';
import Navigators from './components/Navigators';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigators />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    paddingTop: 27,

  },
});
