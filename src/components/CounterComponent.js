import { Button, View, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../action/action"


const CounterComponent = () =>{
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <Text>Count : {count}</Text>
            <Button title="Increment" onPress={()=>dispatch(increment())}>Increment</Button>
            <Button title="Decrement" onPress={()=>dispatch(decrement())}>Decrement</Button>
            <Button title="Reset" onPress={()=>dispatch(reset())}>Reset</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default CounterComponent