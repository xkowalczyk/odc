import { StyleSheet, View, Text } from "react-native"
import { useEffect, useState } from "react"
import FirefightersList from "../components/FiefightersList"
import FirefightersListSearchBar from "../components/FirefighterListSearchBar"
import FiefightersListDetails from "../components/FirefighterListDetails"
import { SpeedDial } from "@rneui/base"

const ManageFirefighterScreen = ({ navigation }) => {
    const firefighters = [
        {
            id: 0,
            name: 'John',
            lastname: 'Doe',
            desc: 'Firefighter from New York',
            group_id: 3,
            gender:1,
        },
        {
            id: 1,
            name: 'Jane',
            lastname: 'Kowalski',
            desc: 'Firefighter from New York',
            group_id: 3,
            gender:0
        },
        {
            id: 2,
            name: 'Mike',
            lastname: 'Anderson',
            desc: 'Firefighter from New York',
            group_id: 3,
            gender:1
        },
    ]
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFirefighters, setFilteredFirefighters] = useState(firefighters);
    const [isShowDetails, setIsShowDetails] = useState(false);
    const [selectedFirefighter, setSelectedFirefighter] = useState();
    const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);
    const [isSpeedDialFirefighterOpen, setIsSpeedDialFirefighterOpen] = useState(false);

    const openSpeedDial = () => {
        setIsSpeedDialOpen(true)
    }

    const closeSpeedDial = () => {
        setIsSpeedDialOpen(false)
    }   

    const filterFirefighters = () => {
        if(searchQuery === ''){
            setFilteredFirefighters(firefighters)
        }else{
            setFilteredFirefighters(firefighters.filter(firefighter => firefighter.name.toLowerCase().includes(searchQuery.toLowerCase()) || firefighter.lastname.toLowerCase().includes(searchQuery.toLowerCase())))
        }
    }

    const openFirefighterSpeedDial = () => {
        setIsSpeedDialFirefighterOpen(true);
    }
    const closeFirefighterSpeedDial = () => {
        setIsSpeedDialFirefighterOpen(false);
    }

        
    const showFirefighter = (id) => {
        console.log('Showing firefighter with id: ' + id);
        setSelectedFirefighter(id);
        setIsShowDetails(true);
    }

    useEffect(() => {
        filterFirefighters()
    }
    ,[searchQuery])

    return(
        <View style={styles.Container}>
            <View style={styles.FirefightersList}>
                <FirefightersListSearchBar setter={setSearchQuery}/>
                <FirefightersList firefighters={filteredFirefighters} showMethod={showFirefighter}/>    
            </View>
            <View style={styles.FirefighterView}>
                {isShowDetails ? <FiefightersListDetails firefighter={firefighters.find(x => x.id == selectedFirefighter)}/> : null}
            </View>
            <SpeedDial
                isOpen={isSpeedDialOpen}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => openSpeedDial()}
                onClose={() => closeSpeedDial()}
                overlayColor="none"
            >
                <SpeedDial.Action
                icon={{ name: 'add', color: '#fff' }}
                title="Dodaj"
                onPress={() => console.log('Add Something')}
                />
            </SpeedDial>
            {
                isShowDetails ? (
                    <SpeedDial
                        isOpen={isSpeedDialFirefighterOpen}
                        style={{marginRight:'5%'}}
                        icon={{ name: 'edit', color: '#fff' }}
                        openIcon={{ name: 'close', color: '#fff' }}
                        onOpen={() => openFirefighterSpeedDial()}
                        onClose={() => closeFirefighterSpeedDial()}
                        overlayColor="none"
                    >
                        <SpeedDial.Action
                        icon={{ name: 'add', color: '#fff' }}
                        title="Edytuj"
                        onPress={() => console.log('Add Something')}
                        />
                        <SpeedDial.Action
                        icon={{ name: 'add', color: '#fff' }}
                        title="Usuń"
                        onPress={() => console.log('Add Something')}
                        />
                    </SpeedDial>
                ):null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    FirefightersList:{
        width: '45%',
        height: '100%',
        marginLeft:'2%',
        borderWidth:0
    },
    FirefighterView:{
        width: '45%',
        height: '100%',
    },
    
})

export default ManageFirefighterScreen