import {Button, Text, View} from "react-native"

const Detailed = ({navigation}) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className='text-black opacity-60'>
                details
            </Text>
            <Button title={'go home page'} onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Detailed