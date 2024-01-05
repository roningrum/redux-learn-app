import CounterComponent from './src/components/CounterComponent';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { StyleSheet, View } from 'react-native';
import NoteForm from './src/components/NoteForm';
import NoteList from './src/components/NoteList';


export default function App() {

  return (
    <Provider store ={store}>
        <View style={style.container}>
          <NoteForm/>
          <NoteList/>
        </View>
    </Provider>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    padding:40
  }
})


