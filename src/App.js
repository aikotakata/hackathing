import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JobTable from './JobTable.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1 id = "h1">Dartmouth On-Campus Jobs </h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <JobTable/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
