import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default ()=> {

const [nota1, setNota1] = useState("");
const [nota2, setNota2] = useState("");

    return (
      <View style={{backgroundColor: "#6495ED", 
            flex: 1, justifyContent: "center", 
            alignItems: "center"
      }}>
        <Text style={{fontSize: 40, fontFamily: "Sarpanch-Regular", paddingBottom: 50}}>Calculo de Média</Text>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 20}}>Informe a 1ª Nota:</Text>

        <TextInput style={{
          marginBottom: 20, 
          borderRadius: 4, 
          height: 20, 
          borderColor: '#000', 
          borderWidth: 1
        }} value={nota1} onChangeText={setNota1}/>

        <Text style={{fontSize: 20}}>Informe a 2ª Nota:</Text>

        <TextInput style={{
          marginBottom: 20, 
          borderRadius: 4, 
          height: 20, 
          borderColor: '#000', 
          borderWidth: 1
        }} value={nota2} onChangeText={setNota2}/>

        <Button title="Calcular" color="#002090" onPress={()=>{
          const n1 = parseFloat(nota1);
          const n2 = parseFloat(nota2)
          const media = (n1 + n2)/2;

          alert("Média: " + media);
        }}/>
      </View>
  );
}