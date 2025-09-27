import { type FC, memo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { DotProps } from './Dot';
import { Dot } from './Dot';

type DotsProps = Pick<DotProps, 'activeDots'> & {
  contentContainerStyle?: StyleProp<ViewStyle>;
  amount?: number;
};

const Dots: FC<DotsProps> = memo(
  ({ contentContainerStyle, activeDots, amount = 5 }) => {
    return (
      <View style={contentContainerStyle}>
        {new Array(amount).fill(0).map((_, index) => {
          return <Dot index={index} activeDots={activeDots} key={index} />;
        })}
      </View>
    );
  },
);

export { Dots };
