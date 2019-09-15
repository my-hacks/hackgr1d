import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Container, FirstContainer, SecondContainer} from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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

export class Proposal extends Component {
  render() {
    return (
      <Container>
        <FirstContainer>
          <Text>Resumo da Proposta</Text>
          <Text>Seguro Veicular</Text>
          <Text>Carro: F-PACE 2019</Text>
          <Text>Media de Mercado: 182.000.000</Text>
          <Text>Cobertura para:</Text>
          <Text>* ANTI-FURTO</Text>
          <Text>* DESASTRE NATURAL</Text>
          <Text>* BATIDAS GRAVES</Text>
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
