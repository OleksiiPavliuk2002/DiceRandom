import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {dice} from "./constants/data";

export default function App() {
    const [dice1, setDice1] = useState(Math.floor(Math.random() * 6 + 1).toString());
    const [dice2, setDice2] = useState(Math.floor(Math.random() * 6 + 1).toString());

  const rollTheDice = () => {
    const dice1Random = Math.floor(Math.random() * 6 + 1).toString();
    const dice2Random = Math.floor(Math.random() * 6 + 1).toString();

    setDice1(dice1Random);
    setDice2(dice2Random);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image source={dice[dice1]} style={{ width: 128, height: 128 }} />
        <Image source={dice[dice2]} style={{ width: 128, height: 128, marginStart: 20 }} />
      </View>
      <TouchableOpacity onPress={rollTheDice}>
        <View style={styles.button}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: 'white' }}>Roll The Dice</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F39C12",
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 8,
  },
});
