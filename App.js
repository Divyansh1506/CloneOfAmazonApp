// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './store';
import { ModalPortal } from 'react-native-modals';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
