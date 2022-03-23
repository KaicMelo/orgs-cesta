
import {FlatList, View, StyleSheet, ScrollView } from 'react-native';

import TextDefault from '../../components/TextDefault'
import TopComponent from './components/Top';
import Details from './components/Details';
import Item from '../../screen/Basket/components/Item';

export default function Basket({ top, detail, itens }) {
    return <>
        <FlatList 
            data={itens.list}
            renderItem={Item}
            keyExtractor={({name}) => name} 
            ListHeaderComponent = { ( ) => {
                return <> 
                    <TopComponent {...top} />
                    <View style={styles.basket}>
                        <Details {...detail} />
                        <TextDefault style={styles.title}>{itens.title}</TextDefault>
                    </View>
                </>
            }}
        />
   
    </>
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title:{
        color:'#464646',
        fontWeight:'bold',
        marginTop:32,
        marginBottom:8,
        fontSize:20,
        lineHeight:32
    },
})