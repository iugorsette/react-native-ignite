import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState([
    {
      name: "Iugor Sette",
    },
    {
      name: "Renata Lazarino",
    },
    {
      name: "Higor Sette",
    },
    {
      name: "John Doe",
    },
    {
      name: "Cristiano Ronaldo",
    },
    {
      name: "Lionel Messi",
    },
    {
      name: "Neymar Jr",
    },
    {
      name: "Vini Jr",
    },
    {
      name: "Jhonatan Calleri",
    },
    {
      name: "Lucas Moura",
    },
    {
      name: "Killian Mbappe",
    },
    {
      name: "Karim Benzema",
    },
  ]);
  function handleParticipantAdd() {
    participants.map((participant) => {
      if (participant.name === "Iugor Sette") {
        return Alert.alert("Iugor Sette já está na lista!");
      }
    });
  }

  function removeParticipant(name: string) {
    participants.map((participant) => {
      if (participant.name === name) {
        participants.splice(participants.indexOf(participant), 1);
      }
    });
    setParticipants([...participants]);
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          removeParticipant(name);
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Participant
            name={item.name}
            onRemove={() => {
              handleParticipantRemove(item.name);
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante adicionado.
          </Text>
        )}
      ></FlatList>
    </View>
  );
}
