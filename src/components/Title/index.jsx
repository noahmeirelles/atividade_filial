import { View, Image, Text } from "react-native";

import styles from "./styles";


const Title = ({ image, title }) => {
  return (
    <View>
      <Image source={image} style={{width: 415, height: 100, marginTop: "-100%"}}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;