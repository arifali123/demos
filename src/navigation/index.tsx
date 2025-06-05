import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PressableScale } from 'pressto';

import { Home } from './home';
import { Screens } from './screens';
import { SearchFilterAtom } from './states/filters';
import { Settings } from './settings';
import { ExpansionProvider } from './home/navigation/expansion-provider';
import { withMainScreenWrapper } from './home/navigation/main-screen-wrapper';
import { withDetailScreenWrapper } from './home/navigation/detail-screen-wrapper';

const MainStack = createNativeStackNavigator();

const MainNavigation = React.memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { navigate } = useNavigation<any>();

  const navigateToSettings = useCallback(() => {
    navigate('Settings');
  }, [navigate]);

  return (
    <ExpansionProvider>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <MainStack.Screen name="Home" component={withMainScreenWrapper(Home)} />
        <MainStack.Screen
          name="Settings"
          component={Settings}
          options={{
            presentation: 'modal',
          }}
        />
        {Screens.map(screen => {
          return (
            <MainStack.Screen
              key={screen.route}
              name={screen.route}
              component={withDetailScreenWrapper(screen.component)}
              options={{
                animation: 'none',
              }}
            />
          );
        })}
      </MainStack.Navigator>
    </ExpansionProvider>
  );
});

export { MainNavigation };
