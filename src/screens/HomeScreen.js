
import { Box, Button, VStack, Text, HStack, Icon, useTheme } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <Box flex={1} bg="background.50" alignItems="center" justifyContent="center" p="5">
            <VStack space={5} alignItems="center">
                <Text fontSize="2xl" bold color="primary.500">
                    Bienvenido a la App
                </Text>

                <Button
                    onPress={() => navigation.navigate('ProfileForm')}
                    size="lg"
                    width="80%"
                    _text={{ fontWeight: 'bold' }}
                    bg="primary.500"
                    _pressed={{ bg: 'primary.600' }}
                    shadow={3}
                >
                    Perfil
                </Button>

                <Button
                    onPress={() => navigation.navigate('NotificationSettings')}
                    size="lg"
                    width="80%"
                    _text={{ fontWeight: 'bold' }}
                    bg="secondary.500"
                    _pressed={{ bg: 'secondary.600' }}
                    shadow={3}
                >
                    Notificaciones
                </Button>

                <Button
                    onPress={() => navigation.navigate('ProfileSummary')}
                    size="lg"
                    width="80%"
                    _text={{ fontWeight: 'bold' }}
                    bg="secondary.500"
                    _pressed={{ bg: 'secondary.600' }}
                    shadow={3}
                >
                    Resumen del Perfil
                </Button>

                <HStack space={2} alignItems="center">
                    <Icon as={Ionicons} name="person" size="lg" color={colors.primary[500]} />
                    <Text color="primary.500">Gestiona tu cuenta fácilmente</Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default HomeScreen;
