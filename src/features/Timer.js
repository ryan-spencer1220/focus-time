import { StyleSheet, Text, View } from "react-native";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { useState } from "react";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused onProgress={() => {}} onEnd={() => {}} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton title="start" onPress={() => setIsStarted(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
