
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import TextDefault from '../components/TextDefault'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Basket() {
    return <> 
        <Image source={topo} style={styles.topo} />
        <TextDefault style={styles.title}>Detalhes da cesta</TextDefault>

        <View style={styles.basket}>
            <TextDefault style={styles.name}> Cesta de Verduras </TextDefault>
            <View style={styles.imageBasket}>
                <Image style={styles.imageFarm} source={logo} ></Image>
                <TextDefault style={styles.nameFarm}> Jenny Jack Farm </TextDefault>
            </View>
            <TextDefault style={styles.description}> Umas cesta com produtos selecionados cuidadosamente da fazendo direto pra sua cozinha</TextDefault>
            <TextDefault style={styles.price}>R$: 40,00</TextDefault>
        </View>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
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
        width:32,
        height:32
    },
    imageBasket: {
        flexDirection:'row',
        paddingVertical:12
    }
})