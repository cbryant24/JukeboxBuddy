import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView``;

const App = () => {
  return (
    <StyledSafeAreaView>
      <Text>Hello World!!</Text>
    </StyledSafeAreaView>
  );
};

export default App;
