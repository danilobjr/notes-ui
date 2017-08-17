import { PropTypes } from 'react';
import { values } from './obj';
import { colors } from './../styles';

export const propTypes = {
  fontColors: PropTypes.oneOf(values(colors.font)),
  backgroundColors: PropTypes.oneOf(values(colors.background)),
  elevation: PropTypes.oneOf([0, 1, 2, 3]),
};
