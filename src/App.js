import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// // // import Header from './compones/Header';
// // import Test from './compones/Test';
// import Count from './compones/Count';
import Props from './compones/Props';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container>
      <Props name="kerala"/>
      <Props name="Tamil Nadu"/>
      </Container>
    </div>
  );
}


export default App;
