import { FlatList, StyleSheet, View, Text } from "react-native";
import { normalize } from "../helpers/helperFunctions";
import { normalizeText } from "@rneui/base";

const EntryList = ({ entryData}) => {
    return(
        <View style={styles.Container}>
            <FlatList
                data={entryData}
                renderItem={({ item }) => (
                    <ListCell entry={item} />
                )}
            />
        </View>
    )
}

const ListCell = ({ entry }) => {
    return (
        <View style={styles.CellContainer}>
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
    );
};

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        height: '100%',
    },
    Text:{
        color:'black',
        fontSize:normalize(15),
        textAlign:'center',
        fontFamily:'AnekLatin',
        color: 'black',
    },
    CellContainer: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
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

export default EntryList;