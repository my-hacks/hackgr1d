import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Card,
  FirstLine,
  SecondLine,
  ThirdLine,
  TextFirstLine,
} from './styles';
import { Avatar } from 'react-native-elements';
import jaguar from '../../assets/img/Jaguar.jpg';

export class CarComponent extends Component {
  render() {
    return (
      <Card>
        <FirstLine>
          {/* <Avatar
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <TextFirstLine>Maria Clara de Souza</TextFirstLine> */}
          <TextFirstLine>JAGUAR F-PACE 2018 </TextFirstLine>
          {/* <TextFirstLine></TextFirstLine> */}
        </FirstLine>
        <SecondLine>
          <Image
            source={jaguar}
            resizeMode="cover"
            style={{ height: '100%', width: '100%' }}
          />
        </SecondLine>
        <ThirdLine>
          <TextFirstLine> Proprietario : Maria Clara de Souza</TextFirstLine>
          <TextFirstLine> Km : 1200000</TextFirstLine>
          <TextFirstLine> Cidade: São Caetano do Sul </TextFirstLine>
          <TextFirstLine> PLACA: </TextFirstLine>
          <TextFirstLine> CPF: 00025176198835 </TextFirstLine>
          <TextFirstLine> SINISTRO : NADA CONSTA </TextFirstLine>
          <TextFirstLine> CHASSI: "9C2KC08106R918325" </TextFirstLine>
        </ThirdLine>
      </Card>
    );
  }
}

export default CarComponent;
