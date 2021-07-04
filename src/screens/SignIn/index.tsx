import React from 'react';
 import { 
     View,
     Text,
     TextInput,
     Image,
     StatusBar,

    
} from 'react-native';


import{ ButtonIcon} from '../../components/ButtonIcon/index';
 import IllustrationImg from '../../assets/illustration.png';
 import { styles} from './style';




 export default function SignIn(){

    
    return(

            <View style={ styles.container}>

                    <StatusBar
                    
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                    />
                <Image
                 source={IllustrationImg} style={ styles.image}/>


                <View style={styles.content}>

                    <Text style={styles.tilte}>

                        Organize {'\n'} suas 
                           jogatinas{'\n'}  facilmente
                    </Text>

                     <Text style={styles.subtitle}>
                         Crie grupos para jogar seus games{'\n'}
                             favoritos com  seus amigos
                     </Text>

                        <ButtonIcon title={"Entrar no Discord"}/>
                </View>
                
            </View>
    );
 }