import './App.css';
import { BodyContainer } from './components/BodyContainer';
import Questions from '../src/pages/Questions';
import AskQuestion from './pages/AskQuestion';

function App() {
    return (
        <BodyContainer>
          <AskQuestion />
            <Questions />
        </BodyContainer>
    );
}

export default App;
