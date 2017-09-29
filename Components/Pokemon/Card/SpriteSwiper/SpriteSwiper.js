import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

const SpriteSwiper = ({ autoplay, data }) => (
  <Swiper
    autoplay={autoplay}
    showsPagination={false}
    style={styles.spriteSwiper}
  >
    {
      data
      .filter(uri => uri)
      .map(uri => <Image key={uri} source={{ uri }} style={styles.sprite} />)
    }
  </Swiper>
);

SpriteSwiper.propTypes = {
  autoplay: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SpriteSwiper.defaultProps = {
  autoplay: true,
};

export default SpriteSwiper;
