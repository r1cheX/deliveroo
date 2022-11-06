import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
    return (
        <SafeAreaView className="bg-red-400 flex-1 justify-center items-center">
            <Animatable.Image
                source={require('../assets/13070.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="w-96 h-96"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center" 
            >
                Cargando su gráfico, espere un momento por favor
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen