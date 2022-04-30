import logo from './logo.svg';
import './App.style.js';
import CardContainer from './component/cardContainer/cardContainer.component';
import { MainWrapper, ProductContainerWrapper } from './component/cardContainer/cardContainer.style';
import { AppContainer } from './App.style.js';

function App() {
  return (
    <AppContainer>
      <MainWrapper>
        <CardContainer />
      </MainWrapper>
    </AppContainer>
  );
}

export default App;
