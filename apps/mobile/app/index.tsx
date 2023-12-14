import { Stack } from 'expo-router';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Index = () => {
  return (
    <SafeAreaView>
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: 'Home Page' }} />
      <View>
        <Text>Home Page</Text>
        <Pressable>
          <Text>Press Me</Text>
        </Pressable>
        <TextInput />
        <Button title="Press Me" />
      </View>
    </SafeAreaView>
  );
};

export default Index;
