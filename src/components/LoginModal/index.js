import React, { Component, Fragment } from 'react';
import {Modal, ModalHeader, ModalBody, Row,Form,Label,Input,Button,Container} from 'reactstrap'
import { toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
  };

class LoginModal extends Component {
  
    
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
        if (emailError ) {
          this.setState({ emailError,  });
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
        const { isOpen, toggleModal, openModal } = this.props;
        return (
            <Fragment>
                <Modal isOpen={isOpen} toggle={() => toggleModal('loginModal')} backdrop={true} className='loginModal'>
                    <div class="d-flex justify-content-center">
                        <ModalHeader>
                            ACCOUNT LOGIN
                        </ModalHeader>
                    </div>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                            <br></br>
                                <Label for="exampleInputEmail1">Email address</Label>
                                <Input type="email" 
                                name="email"
                                    class="form-control"
                                    placeholder="example@indezy.com"
                                    value={this.state.email}
                                    onChange={this.handleChange}>
                                </Input>
                                <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}
                                </div>
                                <Label for="exampleInputPassword1">Password</Label>
                                <Input 
                                name="password"
                                type="password"
                                    class="form-control"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    >
                                </Input>
                                <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}</div>
                                <br></br>
                                <Button type = "submit"color="primary" size="lg" active>LOG IN</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ modals }) => (
    { isOpen: modals.loginModal }
);

export default connect(mapStateToProps, { toggleModal, openModal })(LoginModal);