import { Image, ScrollView, Text, View } from "react-native";
import "../styles/global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from "react";
import { getDescovery, getPopular, getTopRated, getUpcoming } from "../api/api";
import DiscoverMovie from "../components/discover-movie";
import UpcomingMovie from "../components/upcoming-movie";
import { FontAwesome } from '@expo/vector-icons';
import Loader from "../components/loading";

const Home = ({ navigation }) => {
    const [discoverData, setDiscoverData] = useState([])
    const [upcomingData, setUpcomingData] = useState([])
    const [topRatedData, setTopRatedData] = useState([])
    const [popular, setPopular] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getDescovery(setDiscoverData, setIsLoading)
        getUpcoming(setUpcomingData)
        getTopRated(setTopRatedData)
        getPopular(setPopular)
    }, [])

    return (
        <View className="flex-1 bg-slate-900">
            {isLoading ? <Loader /> : (
                <>
                    <SafeAreaView>
                        <StatusBar style={'light'} />
                        <View className={'flex-row justify-between items-center mx-5 my-4'}>
                            <Image source={require('../../assets/logo.png')} className={`w-32 h-10`} />
                            <FontAwesome name="search" size={30} color="white" />
                        </View>
                    </SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >
                        {discoverData.length > 0 && <DiscoverMovie discoverData={discoverData} />}
                        {upcomingData.length > 0 && <UpcomingMovie upcomingData={upcomingData} title='Upcoming movie' />}
                        {discoverData.length > 0 && <UpcomingMovie upcomingData={topRatedData.reverse()} title='Tranding movie' />}
                        {popular.length > 0 && <UpcomingMovie upcomingData={popular} title='Popular movie' />}
                        {topRatedData.length > 0 && <DiscoverMovie discoverData={topRatedData} />}
                    </ScrollView>
                </>
            )}
        </View>
    )
}

export default Home