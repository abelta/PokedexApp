import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

const SpriteSwiper = ({ data }) => (
  <Swiper
    autoplay
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
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SpriteSwiper;
