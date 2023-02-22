import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/AuthContext'
import { Container, Header, Logo, Title, SubTitle, Footer, ButtonContainer, LoginSocialButton, IconSocial, TextButtonLoginSocial } from './styles'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const { navigate } = useNavigation()
  const { user } = useAuth()
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState();

  async function _signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setloggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // usuário cancelou o fluxo de login
        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
        // operação (por exemplo, o login) já está em andamento
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
        // serviços de execução não disponível ou desatualizado
      } else {
        // algum outro erro ocorreu
      }
    } finally {
      console.log(userInfo)
    }
  };
  async function signOut() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // qual API você quer acessar em nome do usuário; o padrão é o email e o perfil
      webClientId:
        '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // o ID do client do tipo WEB para seu servidor (necessário para verificar o ID do usuário e o acesso off-line)
      offlineAccess: true, // se você deseja acessar a API do Google API em nome do usuário DE SEU SERVIDOR
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  return (
    <Container>
      <Header>
        <Logo>GFinanças</Logo>
        <Title>Gerencie suas finanças de forma muito simples</Title>
        <SubTitle>Faça seu loin com uma das contas abaixo</SubTitle>
      </Header>
      <Footer>
        <ButtonContainer>
          <LoginSocialButton onPress={() => navigate('Dashboard')}>
            <IconSocial name='google' />
            <TextButtonLoginSocial>Entrar com Google</TextButtonLoginSocial>
          </LoginSocialButton>
          <LoginSocialButton>
            <IconSocial name='apple1' />
            <TextButtonLoginSocial>Entrar com Apple</TextButtonLoginSocial>
          </LoginSocialButton>
        </ButtonContainer>
      </Footer>
    </Container>
  )
}