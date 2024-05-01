import React from 'react';
import "./App.css";
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

const App = () => {
  return (
    <div className="App">
      <InlineStyle></InlineStyle>
      <CssModules></CssModules>
      <StyledJsx></StyledJsx>
      <StyledComponents></StyledComponents>
      <Emotion></Emotion>
    </div>
  );
};

export default App;