import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarAndroid, Platform, View } from 'react-native';

const ActivityBar = props => (
  <View style={{ height: 2 }}>
    {
      props.active && Platform.OS === 'android' &&
      <ProgressBarAndroid color="grey" styleAttr="Horizontal" style={{ marginTop: -7, marginBottom: -6 }} {...props} />
    }
  </View>
);

ActivityBar.propTypes = {
  active: PropTypes.bool,
};

ActivityBar.defaultProps = {
  active: false,
};

export default ActivityBar;
