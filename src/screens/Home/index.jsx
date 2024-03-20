import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={styles.container}>
     
      <Title title={"Home"} image={require('../../../assets/senas.png')} />

      <TouchButton route="Profile" title="Go to Profile" data={user} />

      
    </View>
  );
}
