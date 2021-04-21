import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../components/profile";

export default function NewTweetScreen() {
  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handlePostTweet = () => {
    console.log("Tweet", tweet);
    console.log("Image Url", imageUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={handlePostTweet}>
          <Text>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image={"hardcoded"} />
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            numberOfLines={3}
            value={tweet}
            onChangeText={(val) => setTweet(val)}
            style={styles.tweetInput}
            placeholder="What's happening?.."
          />
          <TextInput
            value={imageUrl}
            onChangeText={(val) => setImageUrl(val)}
            style={styles.imageInput}
            placeholder="Image Url(optional).."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: -10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  imageInput: {},
});
