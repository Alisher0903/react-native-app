import {Button, StatusBar, Text, View} from "react-native";
import "../styles/global.css";

const Home = ({navigation}) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className='text-black'>
                home
            </Text>
            <Button title={'go detail page'} onPress={() => navigation.navigate('Details')} />
        </View>
    )
}

export default Home