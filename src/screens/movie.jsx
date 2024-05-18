import { ScrollView, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useState } from "react";

const Movie = () => {
    const navigation = useNavigation();
    const [heart, setHeart] = useState(false)
    const heartClick = () => setHeart(!heart)
    const {params: item} = useRoute()
    console.log(item);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            className={`bg-slate-900 flex-1`}
        >
            <View className={`w-full`}>
                <SafeAreaView className={`flex-row justify-between items-center`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className={`mx-5 my-5`}
                    >
                        <AntDesign name="left" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`mx-5 my-5`}
                        onPress={() => heartClick()}
                    >
                        <Fontisto name="heart" size={28} color={`${heart ? 'red' : 'white'}`} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

export default Movie