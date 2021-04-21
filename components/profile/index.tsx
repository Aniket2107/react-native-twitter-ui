import React from "react";
import { Image } from "react-native";

export type ProfilePictureProps = {
  image?: string;
  size?: number;
};

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ height: size, width: size, borderRadius: size }}
    />
  );
};

export default ProfilePicture;
