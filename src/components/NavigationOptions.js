import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import normalize from "@rneui/base/dist/helpers/normalizeText"
const NavigationOptions = ({navigation}) => {
    return(
        <View style={styles.Container}>
            <TouchableOpacity style={styles.SingleOption}>
                <Text style={styles.TitleText}>Tabela zdarzeń</Text>
                <Image source={require('../assets/images/table.png')} resizeMode="contain" style={styles.OptionImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleOption} onPress={()=>navigation.navigate('UsersTeam')}>
                <Text style={styles.TitleText}>Strażacy i grupy</Text>
                <Image source={require('../assets/images/emergency.png')} resizeMode="contain" style={styles.OptionImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleOption}>
                <Text style={styles.TitleText}>Ustawienia</Text>
                <Image source={require('../assets/images/settings.png')} resizeMode="contain" style={styles.OptionImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleOption}>
                <Text style={styles.TitleText}>Logi</Text>
                <Image source={require('../assets/images/log.png')} resizeMode="contain" style={styles.OptionImage}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    SingleOption:{
        width:'20%',
        height:'80%',
        marginTop:'auto',
        marginBottom:'auto',
        backgroundColor:'#FFBF59',
        borderTopEndRadius:20,
        borderBottomStartRadius:20
    },
    TitleText:{
        color:'black',
        fontSize:normalize(20),
        textAlign:'center',
        marginTop:'15%',
        fontFamily:'AnekLatin',
        fontWeight:'bold'
    },
    OptionImage:{
        width:'50%',
        height:'auto',
        flex:1,
        alignSelf:'center',
        
    }
})

export default NavigationOptions;