import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="" image={require('../../../assets/senas.png')} />
      <TouchButton route="Home" title="Go to Home" />
     <Text>Meu Perfil</Text>
      <View style={{ margin: 25, paddingTop: 18, borderRadius: 10, backgroundColor: '#D4D4D4' }}>
        <Text style={{ fontSize: 20, marginTop: -20 }}>Eu estou tentando mas acho que está claro que estou com dificuldade. Ter faltado foi quase obrigatório, pois tive um final de semana complicado onde cheguei em casa somente as 2 da manhã. Em todo trabalho colocarei meu empenho, porém ele pode não ser o suficiente... Se eu não passar neste curso tudo "bem", pelo menos eu tentei.</Text>
      </View>
     
      <View style={styles.user}>
        <Text >Noah</Text>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
        <Text style={styles.text}>{data.address.city}</Text>
        <Text style={styles.text}>{data.address.state}</Text>

      </View>



    </View>
  );
}
