import { Text, View, Image,ScrollView } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
      <Image style={styles.perf2} source={require( '../../../assets/senas.png')}/>
      <TouchButton style={styles.but} route="Home" title="Click to Home" />
      <TouchButton route="Profile"  title="Click to Profile" data={user}/>
      <TouchButton route="Cadastro"  title="Click to Cadastro"  />
     <Text style={{fontSize: 30,fontWeight: "bold"}}>Perfil dos Professores</Text>
      <View style={{ margin: 25, paddingTop: 18, borderRadius: 10, backgroundColor: '#D4D4D4',borderLeftWidth: 3, borderBottomWidth: 3, borderRightWidth: 3, borderTopWidth: 3, borderLeftWidth: 3, borderColor:'red', }}>
        <Text style={{ fontSize:22, color: 'red', marginLeft:7}}>Adendo</Text>
        <Text style={{ fontSize: 20,  padding: 7 }}>Eu estou tentando mas acho que está claro que estou com dificuldade. Ter faltado foi quase obrigatório, pois tive um final de semana complicado onde cheguei em casa somente as 2 da manhã. Em todo trabalho colocarei meu empenho, porém ele pode não ser o suficiente... Se eu não passar neste curso tudo "bem", pelo menos eu tentei.</Text>
      </View></View>

      <View style={styles.container}>
      <View style={styles.user}>
        
        <Text style={styles.text1}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
        <Text style={styles.text}>{data.address.city}</Text>
        <Text style={styles.text}>{data.address.state}</Text>
        <Image style={styles.perf} source={require( '../../../assets/pessoa.jpg')}/>
        <Text style={styles.text2}>Imagem:</Text>
      </View>
      </View>

      </ScrollView>
    </View>
  );
}
