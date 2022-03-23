
import { View, StyleSheet } from 'react-native';

import TopComponent from './components/Top';
import Details from './components/Details';

export default function Basket({ top, detail }) {
    return <>
        <TopComponent {...top} />
        <View style={styles.basket}>
            <Details {...detail} />
        </View>
    </>
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})