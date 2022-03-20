
import { Text, StyleSheet } from 'react-native';

export default function TextDefaul({ children, style }) {
    let currentStyle = styles.text;

    if(style?.fontWeight === 'bold'){
        currentStyle = styles.textBold;
    }

    return <Text style={[style, currentStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})