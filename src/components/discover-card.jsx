import { Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { image500 } from '../api/api';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

const DiscoverCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      className={`justify-center items-center`}
      key={item.id}
      onPress={() => navigation.navigate('Movie', item.id)}
    >
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{ width: width * .8, height: height * .5 }}
        className={`rounded-3xl mx-auto`}
      />
    </TouchableWithoutFeedback>
  );
};

export default DiscoverCard;
