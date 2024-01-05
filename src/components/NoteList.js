import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

const NoteList = () =>{
    const notes = useSelector((state)=> state.notes)
    return(
       <View>
         <Text>Notes:</Text>
        <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editButton}>
                 <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                <Text>Hapus</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      backgroundColor: "#f0f0f0",
      padding: 10,
      borderRadius: 8,
    },
    itemText: {
      flex: 1,
    },
    buttonContainer: {
      flexDirection: "row",
    },
    editButton: {
      backgroundColor: "blue",
      padding: 8,
      borderRadius: 4,
      marginRight: 5,
    },
    deleteButton: {
      backgroundColor: "red",
      padding: 8,
      borderRadius: 4,
    },
  });

export default NoteList