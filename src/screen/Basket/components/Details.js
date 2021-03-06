import { Image, View, TouchableOpacity } from 'react-native';
import TextDefault from '../../../components/TextDefault';

export default function Details({ name, imageFarm, nameFarm, description, price, buy }) {
    return <>
        <TextDefault style={styles.name}> {name} </TextDefault>
        <View style={styles.imageBasket}>
            <Image style={styles.imageFarm} source={imageFarm} ></Image>
            <TextDefault style={styles.nameFarm}> {nameFarm} </TextDefault>
        </View>
        <TextDefault style={styles.description}> {description}</TextDefault>
        <TextDefault style={styles.price}>{price}</TextDefault>

        <TouchableOpacity style={styles.button}>
            <TextDefault style={styles.textButton}>
                {buy}
            </TextDefault>
        </TouchableOpacity>
        
    </>
}

const styles = {
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    imageFarm: {
        width: 32,
        height: 32
    },
    imageBasket: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    button:{
        marginTop: 16,
        backgroundColor :'#2A9F85',
        paddingVertical:16,
        borderRadius:6
    },
    textButton: {
        textAlign: "center",
        color :'#ffffff',
        fontSize:16,
        lineHeight:26,
        fontWeight:'bold'
    }
}