import React from "react";
import { View, FlatList } from "react-native";
import tweets from "../../data/tweet";
import Tweet from "../tweet";

const Feed = () => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
