import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PhoneSignUp from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./component/Home";
import Apps from "./component/App";
function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Apps />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/main"
                element={
                  <ProtectedRoute>
                    <Apps />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<PhoneSignUp />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;