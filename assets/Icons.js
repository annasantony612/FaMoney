import Svg, {SvgProps, Rect, Path, G, Defs, ClipPath} from 'react-native-svg';
import * as React from 'react';

const LeftArrow = () => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LeftArrow;
