import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";

import Footer from "./Footer";

import Styles from "./styles";
import { TweetType } from "../../types";

export type RightContainerProps = {
  tweet: TweetType;
};

const RightContainer = ({ tweet }: RightContainerProps) => {
  return (
    <View style={Styles.rightContainerStyles.container}>
      <View style={Styles.rightContainerStyles.tweetHeaderContainer}>
        <View style={Styles.rightContainerStyles.tweetHeaderNames}>
          <Text style={Styles.rightContainerStyles.name}>
            {tweet.user.name}
          </Text>
          <Text style={Styles.rightContainerStyles.username}>
            @{tweet.user.username}
          </Text>
          <Text style={Styles.rightContainerStyles.createdAt}>
            {moment(tweet.createdAt).fromNow()}
          </Text>
        </View>
        <View>
          <Entypo name="chevron-down" size={16} color="grey" />
        </View>
      </View>
      <View>
        <Text style={Styles.rightContainerStyles.content}>{tweet.content}</Text>
        {!!tweet.image && (
          <Image
            style={Styles.rightContainerStyles.image}
            source={{ uri: tweet.image }}
          />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

export default RightContainer;
