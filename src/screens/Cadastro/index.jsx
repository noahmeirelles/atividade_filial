import { useEffect, useState } from "react";
import { Text,  View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import filial from "../../models/Filial";
import styles from "./styles";

import filialRepository from "../../models/FilialRepository";

export default function Filial() {
  
  const isFocused = useIsFocused();
  const [allFilial, setAllFilial] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const filial = filialRepository.getAll();
      setAllFilial(filial);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Cadastro de professor</Text>
      <Text>Tela de listagem de todos os professores</Text>

      {allFilial.length > 0 ? (
        <View style={styles.useList}>
          {allFilial.map((filial) => (
            <View key={filial.id} style={styles.filialItem}>
              <View>
                <Text style={styles.filialName}>a</Text>
              </View>

             
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há professores cadastrados</Text>
      )}
    </View>
  );
}