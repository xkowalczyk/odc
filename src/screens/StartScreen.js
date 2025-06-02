import { StyleSheet, View } from "react-native"
import NavigationOptions from "../components/NavigationOptions";

const StartScreen = ({navigation}) =>{
    return(
        <View style={styles.Container}>
            <View style={styles.OptionsContainer}>
                <NavigationOptions navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%'
    },
    OptionsContainer:{
        width:'90%',
        height:'50%',
        alignSelf:'center',
        marginTop:'auto',
        marginBottom:'auto',
    }
})

export default StartScreen;
