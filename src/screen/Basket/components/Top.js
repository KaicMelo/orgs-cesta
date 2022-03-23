import { Image, Dimensions } from 'react-native';

import TextDefault from '../../../components/TextDefault';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function TopComponent({title}) {
    return <>
        <Image source={topo} style={styles.topo} />
        <TextDefault style={styles.title}>{title}</TextDefault>
    </>
}

const styles = {
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
}