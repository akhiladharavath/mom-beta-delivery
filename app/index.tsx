<<<<<<< HEAD
import { Text, View,Image} from "react-native";
import Personaldetails from "./Reg/Personaldetails";

import VehicleSelectionScreen from "./Reg/Selectcity";
=======
import { Text, View, TouchableHighlight } from "react-native";
import { router } from "expo-router";
>>>>>>> 59898670d2a926e5dab4df40a9e1b4896f86a00a

export default function Index() {
  return (
    <View>
<<<<<<< HEAD
     
      <Personaldetails></Personaldetails>
     {/* <SelectVehile></SelectVehile> */}
     {/* <SelectVehile></SelectVehile> */}
     {/* <VehicleSelectionScreen></VehicleSelectionScreen> */}
     
=======
      <TouchableHighlight onPress={() => router.replace('./profile/profile')}>
        <Text>gello</Text>
      </TouchableHighlight>
>>>>>>> 59898670d2a926e5dab4df40a9e1b4896f86a00a
    </View>
  );  
}
