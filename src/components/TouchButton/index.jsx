import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";


const TouchButton = ({ route, title, data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route, { data })}
      >
        <Text style={{fontSize:15, color: 'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchButton;
