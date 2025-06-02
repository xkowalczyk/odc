import { View, StyleSheet, Text } from "react-native"
import { Avatar, Image, normalizeText } from "@rneui/base";
import { useState } from "react";
import EntryList from "./EntryList";
const FiefightersListDetails = ({ firefighter }) => {
    const [entryData, setEntryData] = useState([
        {id: 0, date: '2023-10-01', entryPressure: 320, exitPressure: 150, difference: 170, time: 30},
        {id: 1, date: '2023-10-02', entryPressure: 310, exitPressure: 140, difference: 170, time: 28},
        {id: 2, date: '2023-10-03', entryPressure: 300, exitPressure: 130, difference: 170, time: 25},
        {id: 3, date: '2023-10-04', entryPressure: 290, exitPressure: 120, difference: 170, time: 22},
        {id: 4, date: '2023-10-05', entryPressure: 280, exitPressure: 110, difference: 170, time: 20},
        {id: 5, date: '2023-10-06', entryPressure: 270, exitPressure: 100, difference: 170, time: 18},
        {id: 6, date: '2023-10-07', entryPressure: 260, exitPressure: 90, difference: 170, time: 15},
        {id: 7, date: '2023-10-08', entryPressure: 250, exitPressure: 80, difference: 170, time: 12},
        {id: 8, date: '2023-10-09', entryPressure: 240, exitPressure: 70, difference: 170, time: 10},
        {id: 9, date: '2023-10-10', entryPressure: 230, exitPressure: 60, difference: 170, time: 8},
        {id: 10, date: '2023-10-11', entryPressure: 220, exitPressure: 50, difference: 170, time: 6},
        {id: 11, date: '2023-10-12', entryPressure: 210, exitPressure: 40, difference: 170, time: 5},
        {id: 12, date: '2023-10-13', entryPressure: 200, exitPressure: 30, difference: 170, time: 4},
    ]);

    useState(() => {
        console.log(firefighter);
    }, [firefighter]);
    return(
        <View style={styles.Container}>
            <Avatar
                size={152}
                rounded
                title={firefighter.name[0] + firefighter.lastname[0]}
                titleStyle={{ color: "black", fontFamily: "AnekLatin", fontWeight: "bold" }}
                containerStyle={{ backgroundColor: "lightgray", alignSelf:'center',marginTop:'5%',marginBottom:'5%' }}
            />
            <Text style={styles.DescText}>{firefighter.name} {firefighter.lastname}</Text>
            <Text style={[styles.DescText, {fontSize:22, marginTop:'3%'}]}>{firefighter.desc}</Text>
            <View style={styles.ListTitleRow}>
                <View style={[styles.ListTitleCell, {width: '20%'}]}>
                    <Text style={[styles.ListTitleText]}>Data</Text>
                </View>
                <View style={[styles.ListTitleCell, {width: '20%'}]}>
                    <Text style={[styles.ListTitleText]}>Wejscie</Text>
                </View>
                <View style={[styles.ListTitleCell, {width: '20%'}]}>
                    <Text style={[styles.ListTitleText]}>Wyjście</Text>
                </View>
                <View style={[styles.ListTitleCell, {width: '20%'}]}>
                    <Text style={[styles.ListTitleText]}>Róznica</Text>
                </View>
                <View style={[styles.ListTitleCell, {width: '20%'}]}>
                    <Text style={[styles.ListTitleText]}>Czas</Text>
                </View>
            </View>
            {
                entryData.length > 0 ? (
                    <View style={{width:'100%', heightL:'auto', borderWidth:1}}>
                        <EntryList entryData={entryData}/>
                    </View>
                ):(
                    <Text style={[styles.DescText, {marginTop: '5%', color: 'red', fontSize:20}]}>Brak danych</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        height: '100%',
    },
    DescText:{
        color:'black',
        fontSize:27,
        textAlign:'center',
        fontFamily:'AnekLatin',
        color: 'black',
    },
    ListTitleRow: {
        width: '100%',
        height: '8%',
        marginTop: '5%',
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    ListTitleCell: {
        width: '20%',
        height: '100%',
        borderLeftColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        },
    ListTitleText: {
        fontSize: normalizeText(15),
        color: 'black',
        fontWeight: '500',
        fontFamily: 'AnekLatin',
    },
});

export default FiefightersListDetails;
