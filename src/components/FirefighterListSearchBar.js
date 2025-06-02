import { Image } from "@rneui/base";
import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native"

const FirefightersListSearchBar = ({setter}) => {
    return (
        <View style={styles.Container}>
            <TextInput style={styles.Input} placeholder="wyszukaj" onChangeText={(text) => setter(text)}/>
            <Image source={require('../assets/images/search.png')} resizeMode="contain" style={styles.Image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        height: '10%',
        borderWidth:0,
        flexDirection:'row',
    },
    Input:{
        width: '70%',
        height: '80%',
        marginLeft: '5%',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: 'lightgray',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
        borderColor: 'black',
        paddingLeft: 10,
        fontFamily: 'AnekLatin',
        fontSize: 20
    },
    Image:{
        width:40,
        height:'auto',
        flex:1,
        borderWidth:0,
        marginLeft:10,
    }
})

export default FirefightersListSearchBar;