import { StyleSheet} from 'react-native';
import { theme } from '../../global/style/theme';

export  const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: theme.colors.background
    },

    image:{
        width: '100%',
        height: 360,
    },

    tilte:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom:16,
    },
    content:{
        marginTop: -40,
        paddingHorizontal:50,
    },
    subtitle:{
        color:  theme.colors.heading,
        fontSize:16,
        textAlign:'center',
        marginBottom:64,
    },
 
})