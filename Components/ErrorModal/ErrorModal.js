import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text } from 'react-native';

const ErrorModal = ({ children }) => (
  <Modal>
    <Text>{children}</Text>
  </Modal>
);

ErrorModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorModal;
