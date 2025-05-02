// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';

// import { router } from 'expo-router';


// const BloodDonorScreen = () => {
  

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
      
//         <Text style={styles.headerTitle}>Earnings</Text>
//         <View style={{ width: 24 }} /> 
//       </View>

//       <View style={styles.card1}>
//         <View style={styles.imgcrt}>
//             <Text style={styles.cardText}>
//                This week 20 Dec 2024
//             </Text>
//             <Image source={require('../../assets/images/earn.png')} style={styles.ernimg}/>
//         </View>
        
//         <TouchableOpacity>
//           <Text style={styles.registerLink} onPress={()=>router.push('/Home/Bill')}>See My Earning History →</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.card2}>
//         <Text style={styles.cardText}>
//           Rate Card
//         </Text>
//         <Image source={require('../../assets/images/rate.png')} style={styles.ernimg}/>
//         <Text style={styles.cardText}>
         
//         </Text>
//         <TouchableOpacity>
//           <Text style={styles.registerLink} onPress={()=>router.push('/Home/Bill')}>Check My rate Card →</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.card3}>
//         <Text style={styles.cardText}>
//           Payouts
//         </Text>
//         <Image source={require('../../assets/images/pay.png')} style={styles.ernimg}/>
//         <TouchableOpacity>
//           <Text style={styles.registerLink} onPress={()=>router.push('/Home/Bill')}>Check Payouts History →</Text>
//         </TouchableOpacity>
//       </View>
    

      

      


     
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   card1: {
//     backgroundColor: '#FFA07A',
//     borderRadius: 12,
//     padding: 16,
//     marginVertical: 20,
//     height:150
//   },
//   card2: {
//     backgroundColor: '#40E0D0',
//     borderRadius: 12,
//     padding: 16,
//     marginVertical: 20,
//     height:150
//   },
//   card3: {
//     backgroundColor: '#DFFF00',
//     borderRadius: 12,
//     padding: 16,
//     marginVertical: 20,
//     height:150
//   },
//   ernimg:
//   {
//     height:70,
//     width:70,
//     marginHorizontal:230,
//     borderRadius:10

//   },
//   cardText: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom:'auto',
//   },
//   registerLink: {
//     color: '#0000FF',
//     fontWeight: '600',
//   },
//   subHeading: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 10,
//   },
//   pickerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   picker: {
//     flex: 1,
//     marginRight: 10,
//     backgroundColor: '#f2f2f2',
//     borderRadius: 8,
//   },
//   pickerFull: {
//     backgroundColor: '#f2f2f2',
//     borderRadius: 8,
//     marginTop: 10,
//   },
//   searchButton: {
//     backgroundColor: '#008060',
//     padding: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   searchText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   bottomImage: {
//     height: 240,
//     width: '100%',
//     marginTop: 20,
//   },
// });

// export default BloodDonorScreen;
