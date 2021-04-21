import React from "react";
import { View, Text } from "react-native";
import { TweetType } from "../../types";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";

import Styles from "./styles";

export type FooterProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterProps) => {
  return (
    <View style={Styles.FooterStyles.container}>
      <View style={Styles.FooterStyles.iconContainer}>
        <Feather name="message-circle" size={20} color="grey" />
        <Text style={Styles.FooterStyles.number}>{tweet.noOfComments}</Text>
      </View>
      <View style={Styles.FooterStyles.iconContainer}>
        <EvilIcons name="retweet" size={28} color="grey" />
        <Text style={Styles.FooterStyles.number}>{tweet.noOfRetweets}</Text>
      </View>
      <View style={Styles.FooterStyles.iconContainer}>
        <AntDesign name="hearto" size={20} color="grey" />
        <Text style={Styles.FooterStyles.number}>{tweet.noOfLikes}</Text>
      </View>
      <View style={Styles.FooterStyles.iconContainer}>
        <EvilIcons name="share-google" size={28} color="grey" />
      </View>
    </View>
  );
};

export default Footer;
