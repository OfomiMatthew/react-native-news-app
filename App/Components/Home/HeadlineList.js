import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const HeadlineList = ({ newsList }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.textHead}>
      <Text style={styles.texts}>Headline Lists</Text>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View
              style={{ height: 1, backgroundColor: "grey", marginTop: 10 }}
            ></View>
            <TouchableOpacity style={styles.touchAble} onPress={()=>navigation.navigate('News',{news:item})}>
              <Image source={{ uri: item.urlToImage }} style={styles.imgSrc} />

              <View style={styles.viewTexts}>
                <Text numberOfLines={4} style={styles.title}>
                  {item.title}
                </Text>
                <Text style={styles.name}>{item.source.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgSrc: {
    // width: Dimensions.get("screen").width * 0.3,
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 100,
  },
  title: {
    fontWeight: "500",
  },
  textHead: {
    marginTop: 10,
  },
  texts: {
    fontWeight: "500",
    fontSize: 15,
    color: "#3480ee",
    marginTop:15
  },
  touchAble: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewTexts: {
    marginRight: 140,
    marginLeft: 10,
  },
  name: {
    color: "#3480ee",
    marginTop: 5,
  },
});

export default HeadlineList;
