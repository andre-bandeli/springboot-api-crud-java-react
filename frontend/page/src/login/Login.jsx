import {React, useState} from 'react'
import Navbar from '../components/Nav/Navbar'
import { useDispatch } from "react-redux";

import './login.scss'

import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";

import { authenticateUser } from "./auth";

const Login = (props) => {


    const [error, setError] = useState();
    const [show, setShow] = useState(true);
    const initialState = {
      email: "",
      password: "",
    };
    const [user, setUser] = useState(initialState);
    const credentialChange = (event) => {
    const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();

    const validateUser = () => {
      dispatch(authenticateUser(user.email, user.password))
        .then((response) => {
          console.log(response.data);
          return props.history.push("/home");
        })
        .catch((error) => {
          console.log(error.message);
          setShow(true);
          setError("Invalid email and password");
        });
    };


  return (
    <div className='login'>
        <Navbar/>

        <div className="container-text">
            <h1>Faça login para acessar a área de clientes.</h1>
            <h2>Caso não tenha uma, considere criar uma para ficar por dentro de todas as novidades.</h2>
        </div>
        <div className="container-forms">
          <div className="title">
            <h1>Login</h1>
            <h2>Cadastrar-se</h2>
          </div>

          <div className="forms">
          <Row className="justify-content-md-center">
              <Col xs={5}>
                {show && props.message && (
                  <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    {props.message}
                  </Alert>
                )}
                {show && error && (
                  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    {error}
                  </Alert>
                )}
                <Card className={"border border-dark bg-dark text-white"}>
                          <Card.Header>
                          <h2>Login</h2>
                          </Card.Header>
                          <Card.Body>
                            <Form.Row>
                              <Form.Group as={Col}>
                                <InputGroup>
                                  <InputGroup.Prepend>
                                    <InputGroup.Text>
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <FormControl
                                    required
                                    autoComplete="off"
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={credentialChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Email Address"
                                  />
                                </InputGroup>
                              </Form.Group>
                            </Form.Row>
                            <Form.Row>
                              <Form.Group as={Col}>
                                <InputGroup>
                                  <InputGroup.Prepend>
                                    <InputGroup.Text>
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <FormControl
                                    required
                                    autoComplete="off"
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={credentialChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Password"
                                  />
                                </InputGroup>
                              </Form.Group>
                            </Form.Row>
                          </Card.Body>
                          <Card.Footer style={{ textAlign: "right" }}>
                            <Button
                              size="sm"
                              type="button"
                              variant="success"
                              onClick={validateUser}
                              disabled={user.email.length === 0 || user.password.length === 0}
                            >
                              <h2>Login</h2> 
                            </Button>{" "}
                            <Button
                              size="sm"
                              type="button"
                              variant="info"
                    
                              disabled={user.email.length === 0 && user.password.length === 0}
                            >
                            </Button>
                          </Card.Footer>
                        </Card>
                </Col>
              </Row>
          </div>
        </div>
    </div>
  )
}

export default Login;
