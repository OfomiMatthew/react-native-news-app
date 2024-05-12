import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import data from "../../Resources/data";
import { useState } from "react";
const Category = ({selectCategory}) => {
  const [active, setActive] = useState(1);
const handleCategory = (id)=>{
setActive(id)
}
  return (
    <View style={styles.catTop}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item,index }) => (
          <TouchableOpacity onPress={()=>{handleCategory(item.id);selectCategory(item.name)}}>
            <Text style={item.id==active ?styles.categories:styles.uncategories}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    marginRight: 10,
    fontSize: 17,
    fontWeight: "700",
    color:"#3480ee",
    
    // marginTop:5,
  },
  catTop: {
    marginTop: 20,
  },
  uncategories:{
    color:"gray",
    marginRight: 10,
    fontSize: 17,
    fontWeight: "500",
  }
});
export default Category;
