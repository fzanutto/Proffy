import { StyleSheet } from 'react-native'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins'
import { Archivo_700Bold } from '@expo-google-fonts/archivo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,

    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        lineHeight: 26,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular'
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }

})

export default styles