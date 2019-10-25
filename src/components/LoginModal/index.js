import React, { Component, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Form, Label, Input, Button, Container, Nav, NavItem, NavLink } from 'reactstrap'
import { toggleModal, openModal, login } from 'Redux/actions';
import { connect } from 'react-redux';
import { Col } from 'antd';

const bg = "assets/img/computer-3163437.svg"

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

class LoginModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _isOpen: props.isOpen
    }
  }

  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let emailError = "";
    // let passwordError = "";



    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError, });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }

  };
  render() {
    const { isOpen, toggleModal, openModal, auth, login } = this.props;
    
    return (
      <Fragment>
        <Modal isOpen={isOpen} toggle={() => toggleModal('loginModal')} backdrop={true} className='loginModal'>
          <div className="d-flex justify-content-center" style={{
            backgroundColor: "black",
            backgroundImage: "url(" + bg + ")" 
          }}>

            <ModalBody >
              <NavItem>
                <NavLink onClick={() => {this.setState({_isOpen: false})}}  style={{ color: '#F47529' }} >- Back To Home</NavLink>
              </NavItem>

              <div className="d-flex  justify-content-center">
                <Form onSubmit={(e) => { e.preventDefault(); login(this.state.email, this.state.password) }}>
                  <div className="form-group ">

                    <Row style={{ display: "flex", justifyContent: "center" }}>
                      <Col>
                        <img src="assets\img\IndezyLogo-05.svg" />
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col>

                        <Input type="email"
                          name="email"
                          className="form-control"
                          placeholder="example@indezy.com"
                          value={this.state.email}
                          style={{ width: 250 }}
                          onChange={this.handleChange}>

                        </Input>
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.emailError}
                        </div>

                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col>
                        <Input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={this.state.password}
                          style={{ width: 250 }}
                          onChange={this.handleChange}
                        >
                        </Input>
                        <div style={{ fontSize: 12, color: "red" }}>
                          {/* {this.state.passwordError} */}
                          {auth.message}
                        </div>

                      </Col>
                    </Row>

                    <br></br><div className="d-flex  justify-content-center">
                    <Row>
                    
                      <Col>
                        <Button type="submit" color="#F47529" size="md" style={{backgroundColor: "#F47529", color: "#fff"}} active>LOG IN</Button>
                      </Col>
                      
                    </Row>
                    </div>

                  </div>

                </Form>
              </div>
            </ModalBody>
          </div>

        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ modals, auth }) => (
  { isOpen: modals.loginModal, auth: auth }
);

export default connect(mapStateToProps, { toggleModal, openModal, login })(LoginModal);