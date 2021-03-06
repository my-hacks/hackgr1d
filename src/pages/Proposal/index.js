import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  Container,
  FirstContainer,
  SecondContainer,
  TextProposals,
  TitleProposal,
  ButtonFinalProposal,
  LeftSide,
  RightSide,
} from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import api from '../../services/api';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const sendSMS = async () => {
  const phoneNumber = '5511950005586';
  const message = 'Novo proposta de seguros para analise';

  // const url = `https://hacka-gr1d-api.herokuapp.com/sms/${phoneNumber}/${message}`;
  const url = `http://node-express-env.aiwiqxrv4w.sa-east-1.elasticbeanstalk.com/users/sms/${phoneNumber}/${message}`;

  const response = await api.get(url);

  console.log('SMS Response', response);
};

export class Proposal extends Component {
  render() {
    return (
      <Container>
        <FirstContainer>
          <LeftSide>
            <TitleProposal>Resumo da Proposta</TitleProposal>
            <TextProposals>Seguro Veicular</TextProposals>
            <TextProposals>Carro: F-PACE 2019</TextProposals>
            <TextProposals>Valor Mercado: 182.000</TextProposals>
            <TextProposals>Cobertura para:</TextProposals>
            <TextProposals>* ANTI-FURTO</TextProposals>
            <TextProposals>* DESASTRE NATURAL</TextProposals>
            <TextProposals>* BATIDAS GRAVES</TextProposals>
          </LeftSide>
          <RightSide>
            <ButtonFinalProposal onPress={this.sendSMS}>
              <Text
                style={{
                  color: '#FFF',
                }}>
                Finalizar Proposta
              </Text>
            </ButtonFinalProposal>
          </RightSide>
        </FirstContainer>
        <SecondContainer>
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: -22.9073514,
                longitude: -43.1752744,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            />
          </View>
        </SecondContainer>
      </Container>
    );
  }
}

export default Proposal;
