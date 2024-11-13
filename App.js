
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileFormScreen from './src/screens/ProfileFormScreen';
import NotificationSettingsScreen from './src/screens/NotificationSettingsScreen';
import ProfileSummaryScreen from './src/screens/ProfileSummaryScreen';

const Stack = createStackNavigator();

const theme = extendTheme({
  colors: {
    primary: {
      500: '#4CAF50',
    },
    secondary: {
      500: '#FF5722',
    },
    background: {
      50: '#F1F1F1',
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'sm',
        _text: {
          fontWeight: 'bold',
          color: 'white',
          textAllign: 'center'
        },
      },
      defaultProps: {
        colorScheme: 'primary',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          _pressed: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          _text: {
            color: 'primary.500',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'secondary.500',
        textAllign: 'center',
      },
    },
  },
});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
          <Stack.Screen name="ProfileForm" component={ProfileFormScreen} options={{ title: 'Perfil' }} />
          <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} options={{ title: 'Notificaciones' }} />
          <Stack.Screen name="ProfileSummary" component={ProfileSummaryScreen} options={{ title: 'Resumen de Perfil' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
