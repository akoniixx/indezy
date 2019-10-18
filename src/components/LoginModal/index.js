import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
class LoginModal extends Component {
    render() {
        const { isOpen, toggleModal, openModal } = this.props;
        return (
            <Fragment>
                <Modal isOpen={isOpen} toggle={() => toggleModal('loginModal')} backdrop={true} className='loginModal'>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary">Cancel</Button>
                    </ModalFooter> */}
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ modals }) => (
    { isOpen: modals.loginModal }
);

export default connect(mapStateToProps, { toggleModal , openModal })(LoginModal);