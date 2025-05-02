import React from 'react'
import { View, Text,Image, ScrollView,  StyleSheet,TouchableOpacity, } from 'react-native'
import { Picker } from '@react-native-picker/picker';   
import { router } from 'expo-router';

export default function Personaldetails() {
    return (
        <ScrollView >
            <View>
                <View style={styles.imgbox}>
                                
                        <Image source={require('../../assets/images/image.png')} style={styles.img1}/>
                </View>

                <Text style={styles.txt}>We've auto detected your city,{"\n"} This is the city where you will work </Text>
                <Text style={styles.citytxt}>
                    Hyderabad

                </Text>

                <TouchableOpacity>
                    <Text style={styles.city} onPress={()=>router.push('/Reg/Selectcity')} >Change City→</Text>
               </TouchableOpacity>

              

               {/* <Picker
       
      >
        <Picker.Item label="Select City" value="" />
        <Picker.Item label="Gachibowli" value="Gachibowli" />
        <Picker.Item label="Madhapur" value="Gachibowli" />
        <Picker.Item label="Ghatkesr" value="Gachibowli" />
        <Picker.Item label="Uppal" value="Gachibowli" />
        <Picker.Item label="Hitec City" value="Gachibowli" />
       
      </Picker>  */}
    
            </View>
            <TouchableOpacity style={styles.continueButton}onPress={()=>router.push('/Reg/vachile')}>
                       <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
           

        </ScrollView>
       
    )
}


const styles=StyleSheet.create(
    {
       
        img1:
        {
        height:200,
        width:200,
        marginHorizontal:'auto',
        marginBlockStart:20,
        backgroundColor:'green',
        borderBlockEndColor:'pink',
        borderRadius:200
       
         
        },
        imgbox:
        {
            marginBlockStart:80,
           
            borderRadius:20,
           
        },
        txt:
        {
            textAlign:'center',
            marginBlockStart:10,
        },
        city:
        {
            textAlign:'center',
            marginBlockStart:40,
            color:'blue',
            fontSize:20
          
        },
        citytxt:
        {
            textAlign:'center',
            fontSize:20,
            marginBlockStart:40,

        },
        continueButton: {
            backgroundColor: '#00A99D',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'center', 
            marginTop:50,
            
          },
          continueText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          },

    }
)