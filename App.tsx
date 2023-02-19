import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
