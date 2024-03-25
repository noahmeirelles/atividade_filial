import { View, Image, ScrollView } from "react-native";

import styles from "./styles";

import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";



export default function Home() {
  return (
    <View>
      <ScrollView>
    <View style={styles.container}>
     
      <Image source={require("../../../assets/senas.png")} style={styles.senas} />
      <TouchButton route="Home"  title="Click to Home" />
      <TouchButton route="Profile" title="Click to Profile" data={user} />
    
      <TouchButton route="Cadastro"  title="Click to Cadastro"  />

      
    </View>
    </ScrollView>
    </View>
  );
}
