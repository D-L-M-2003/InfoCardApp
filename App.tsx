import { SafeAreaView, ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('Welcome to my app');
  const [food, setfood] = useState('');

 


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require('./assets/Replacement.jpg')} style={styles.image} />
        <Text style={styles.header}>Welcome to My profile</Text>
      </ScrollView>
      <TextInput
      style={styles.input}
      placeholder="Enter your name"
     value={name}
     onChangeText={setName}
     />

    <TextInput style={styles.input}
     placeholder="Enter your hobby"
     value={hobby}
     onChangeText={setHobby}
     />

<TextInput style={styles.input}
     placeholder="Enter your favourite food"
     value={food}
     onChangeText={setfood}
     />

    <Button title="Show Greeting" onPress={() => setMessage(`Hello ${name}, enjoy ${hobby}`)} />
    
<View style={styles.card}>
  <Text style={styles.cardText}>Hello, {name}</Text>
  <Text style={styles.cardText}>Your hobby is {hobby}</Text>
  <Text style={styles.cardText}>Your favourite food is {food}</Text>
</View>


<Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.onlineImage} />

<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>

    </SafeAreaView>
    
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    marginVertical: 5
  }
  
});


