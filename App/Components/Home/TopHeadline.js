import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import color from "../../Shared/color";
import { useNavigation } from "@react-navigation/native";

const TopHeadline = ({ newsList }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.headText}>
      <Text style={styles.text}>Top Headlines</Text>
      <FlatList
        data={newsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('News',{news:item})}
            style={{ width: Dimensions.get("screen").width * 0.8 }}
          >
            {item.urlToImage !== null ? (
              <Image source={{ uri: item.urlToImage }} style={styles.imgSrc} />
            ) : (
              <Image
                source={{
                  uri: "https://th.bing.com/th/id/R.6e80a0bd8edd2b150d2b11490de3e6a9?rik=ySfWjUYsC0ouVQ&riu=http%3a%2f%2fwww.emba.cat%2fwp-content%2fuploads%2f2019%2f12%2fNews_red-1024x1024.jpg&ehk=IKAUqBxwxxGDpcloe%2fUcTzJoMPDNDGAMGBsnlxmj98g%3d&risl=&pid=ImgRaw&r=0",
                }}
                style={styles.imgSrc}
              />
            )}
            <View>
              {item.title !== "[Removed]" ? (
                <Text numberOfLines={2} style={styles.itemTitle}>
                  {item.title}
                </Text>
              ) : null}
              {item.source.name !== "[Removed]" ? (
                <Text style={styles.itemSource}>{item?.source?.name}</Text>
              ) : null}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgSrc: {
    height: Dimensions.get("screen").width * 0.75,
    // width: 300,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 15,
  },
  headText: {
    marginTop: 10,
  },
  text: {
    fontWeight: "500",
    color: color.primary,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    marginRight: 15,
  },
  itemSource: {
    marginTop: 5,
    color: color.primary,
  },
});

export default TopHeadline;
