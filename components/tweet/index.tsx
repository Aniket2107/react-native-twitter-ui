import React from "react";
import { View } from "react-native";
import { TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

import Styles from "./styles";

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={Styles.indexStyles.container}>
      <LeftContainer user={tweet.user} />
      <RightContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;
