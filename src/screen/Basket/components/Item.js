import { View, Image, StyleSheet, FlatList } from 'react-native';
import TextDefault from '../../../components/TextDefault';

export default function Item({item: {name,image}}){
    return <View key={name} style={styles.item}>
        <Image source={image} style={styles.image}/>
        < TextDefault style={styles.name}> {name}</TextDefault>
    </View>;
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        paddingVertical: 16,
        marginHorizontal:16,
        borderBottomWidth:1,
        borderBottomColor:'#ECECEC',
        alignItems:"center",
    },
    image:{
        width:46,
        height:46
    },
    name:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color:'#464646'
    }
})