import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Card, FirstLine, SecondLine, ThirdLine, TextFirstLine} from './styles';
import {Avatar} from 'react-native-elements';
import jaguar from '../../assets/img/Jaguar.jpg';

export class CarComponent extends Component {
  render() {
    // const {dados} = this.props;
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
          <TextFirstLine>
            {/* JAGUAR F-PACE {dados.customPayload.car.year} */}
            JAGUAR F-PACE 2019
          </TextFirstLine>
          {/* <TextFirstLine></TextFirstLine> */}
        </FirstLine>
        <SecondLine>
          <Image
            source={jaguar}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}
          />
        </SecondLine>
        <ThirdLine>
          <TextFirstLine>
            {/* Proprietario : {dados.customPayload.owner.name} */}
            Proprietario : José Ricardo Lopes
          </TextFirstLine>
          <TextFirstLine> Km : 43000</TextFirstLine>
          <TextFirstLine> Cidade: São Paulo </TextFirstLine>
          <TextFirstLine> PLACA: MNK8299 </TextFirstLine>
          <TextFirstLine> CPF: 25176198835 </TextFirstLine>
          <TextFirstLine>
            {/* SINISTRO : {dados.formatResult.SINISTRO} */}
            SINISTRO: Nao encontrado
          </TextFirstLine>
          <TextFirstLine> CHASSI: 9C2KC08106R918325</TextFirstLine>
        </ThirdLine>
      </Card>
    );
  }
}

export default CarComponent;
