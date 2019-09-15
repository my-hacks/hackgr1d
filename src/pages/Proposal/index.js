import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, FirstContainer, SecondContainer} from './styles';

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
        <SecondContainer />
      </Container>
    );
  }
}

export default Proposal;
