import { Text, View, TouchableHighlight } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <TouchableHighlight onPress={() => router.replace('./Reg/register')}>
        <Text>gello</Text>
      </TouchableHighlight>
    </View>
  );  
}
