import { StatusBar, Text, View } from "react-native";
import "../styles/global.css";

const Home = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className='text-black'>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default Home