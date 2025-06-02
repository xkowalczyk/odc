import { Avatar, Text } from "@rneui/base";
import { FlatList, StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";

const screenHeight = Math.floor(Dimensions.get('window').height);

const FirefightersList = ({ firefighters, showMethod }) => {
    return(
        <View style={styles.Container}>
            <FlatList
                data={firefighters}
                renderItem={({ item }) => <FirefighterCard firefighter={item} showMethod={showMethod}/>}
                keyExtractor={item => item.id.toString()}
                removeClippedSubviews={false} 
            />
        </View>
    )
}

const FirefighterCard = ({ firefighter, showMethod }) => {
    return(
        <TouchableOpacity style={cardStyles.Container} onPress={() => showMethod(firefighter.id)}>
            <Avatar
                size={52}
                rounded
                title={firefighter.name[0] + firefighter.lastname[0]}
                titleStyle={{ color: "black", fontFamily: "AnekLatin", fontWeight: "bold" }}
                containerStyle={{ backgroundColor: "white", marginLeft:'2%',marginTop:'auto',marginBottom:'auto' }}
            />
            <Text style={cardStyles.TitleText}>{firefighter.name} {firefighter.lastname}</Text>
        </TouchableOpacity>
    )
}

const cardStyles = StyleSheet.create({
    Container:{
        width: '100%',
        height: screenHeight * 0.1,
        backgroundColor:'#FFBF59',
        marginTop:10,
        flexDirection:'row',
    },
    TitleText:{
        color:'black',
        fontSize:22,
        textAlign:'center',
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:'5%',
        fontFamily:'AnekLatin',
    },
})

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        height: '80%',
    },
})

export default FirefightersList;