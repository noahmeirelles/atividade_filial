
import TouchButton from "../../components/TouchButton";
import { View, Image } from "react-native";
import styles from "./styles";
import { user } from "../../data/Profile";
export default function Cadastro() {
    return (
      <View>
      <View style={styles.container}>
       
        <Image source={require("../../../assets/senas.png")} style={styles.senas} />
        <TouchButton route="Home"  title="Click to Home"  />
        <TouchButton route="Profile" title="Click to Profile" data={user} />
        
        <TouchButton route="Cadastro"  title="Click to Cadastro"  />
      </View>
      </View>
    );
  }