import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/AuthContext'
import { Container, Header, Logo, Title, SubTitle, Footer, ButtonContainer, LoginSocialButton, IconSocial, TextButtonLoginSocial } from './styles'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

export function SignIn() {
  const { user } = useAuth()
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  async function _signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn();
      console.log(accessToken)
      console.log(idToken)

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
          <LoginSocialButton onPress={_signIn}>
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