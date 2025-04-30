import { Text, View, TouchableHighlight } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <TouchableHighlight onPress={() => router.replace('./profile')}>
        <Text>gello</Text>
      </TouchableHighlight>
    </View>
  );
}
