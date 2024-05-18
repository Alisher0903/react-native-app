import { View, Dimensions } from "react-native"
import Swiper from 'react-native-swiper';
import DiscoverCard from "./discover-card";

const { width, height } = Dimensions.get('window')

const DiscoverMovie = ({ discoverData }) => {
    return (
        <View className={`mb-5`}>
            <Swiper
                loop={true}
                autoplay={true}
                autoplayTimeout={5}
                dotStyle={{ display: 'none' }}
                activeDotStyle={{ display: 'none' }}
                firstItem={1}
                sliderWidth={width}
                itemWidth={width * .7}
                style={{ height: height * .5, marginTop: 16, marginBottom: 20 }}
            >
                {discoverData.map((item, index) => (
                    <DiscoverCard key={index} item={item} />
                ))}
            </Swiper>
        </View>
    )
}

export default DiscoverMovie