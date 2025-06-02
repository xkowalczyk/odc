import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const SelectUserOrTeam = ({ navigation}) => {
  return (
    <View style={styles.Container}>
                <TouchableOpacity style={styles.SingleOption}>
                    <Text style={styles.TitleText}>Grupy</Text>
                    <Image source={require('../assets/images/table.png')} resizeMode="contain" style={styles.OptionImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SingleOption} onPress={()=>navigation.navigate('ManageFirefighter')}>
                    <Text style={styles.TitleText}>Strażacy</Text>
                    <Image source={require('../assets/images/emergency.png')} resizeMode="contain" style={styles.OptionImage}/>
                </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    SingleOption:{
        width:'30%',
        height:'70%',
        marginTop:'auto',
        marginBottom:'auto',
        backgroundColor:'#FFBF59',
        borderTopEndRadius:20,
        borderBottomStartRadius:20
    },
    TitleText:{
        color:'black',
        fontSize:25,
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

export default SelectUserOrTeam;