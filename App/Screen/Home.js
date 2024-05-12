import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import Category from "../Components/Home/Category";
import color from "../Shared/color";
import { FontAwesome5 } from "@expo/vector-icons";
import TopHeadline from "../Components/Home/TopHeadline";
import HeadlineList from "../Components/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";
import { useState, useEffect } from "react";

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory("latest");
  }, []);
  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadlines).data;
    console.log(result);
    setNewsList(result.articles);
  };

  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles);
    setLoading(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      
     
      <View style={styles.notification}>
        <Text style={styles.apptext}>News App</Text>
        <FontAwesome5 name="bell" size={24} color="black" />
      </View>

      <Category selectCategory={(category) => getNewsByCategory(category)} />
      {loading?<ActivityIndicator style={{marginTop:'100%'}}  size={'large'}/>:
        <View>
      <TopHeadline newsList={newsList} />
      <HeadlineList newsList={newsList} />
      </View>
  }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  apptext: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.primary,
  },
  notification: {
    display: "flex",

    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Home;
