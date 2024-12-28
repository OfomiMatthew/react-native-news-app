import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Share, Button, ScrollView } from "react-native";
import { openBrowserAsync } from 'expo-web-browser';
import { AntDesign } from "@expo/vector-icons";

// import { AntDesign } from '@expo/vector-icons';

const News = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation()
  useEffect(() => {}, []);
  const shareNews =()=>{
    Share.share({
      message:`${news.title} \nRead More ${news.description} ${news.url}`
    })
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="back" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>shareNews()}>
          <AntDesign name="sharealt" size={25} color="black" />
        </TouchableOpacity>
      </View>
      {news.urlToImage !==null ?(<Image
        source={{ uri: news.urlToImage }}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 10,
          marginTop: 15,
          padding: 10,
        }}
      />):(<Image source={{uri:"https://th.bing.com/th/id/R.6e80a0bd8edd2b150d2b11490de3e6a9?rik=ySfWjUYsC0ouVQ&riu=http%3a%2f%2fwww.emba.cat%2fwp-content%2fuploads%2f2019%2f12%2fNews_red-1024x1024.jpg&ehk=IKAUqBxwxxGDpcloe%2fUcTzJoMPDNDGAMGBsnlxmj98g%3d&risl=&pid=ImgRaw&r=0"}} style={{width:'100%',height:300, borderRadius: 10,
      marginTop: 15,
      padding: 10,}} />)}
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>{news.title}</Text>
        <Text style={{ fontSize: 15, color: "#3480ee" }}>
          {news.source.name}
        </Text>

        <Text style={{ marginTop: 10, lineHeight: 23 }}>
          {news.description}
        </Text>
        <View style={{marginTop:20}}>
        <Button onPress={() => openBrowserAsync(news.url)}
          style={{
            fontSize: 15,
            fontWeight: "600",
            marginTop: 10,
            color: "#3480ee",
          }}
          title="Read More"
        
        />
       
        
        </View>
      </View>
    </ScrollView>
  );
};

export default News;
