import React, { Component } from 'react';
import { Text, View, TextInput, ActivityIndicator } from 'react-native';
import {
  Container,
  TitleScreen,
  ButtonSendProposal,
  TitlePaymentMetric,
  ButtonSend,
} from './styles';
import api from '../../../services/api';
import Card from '../../../components/CarComponent';
import { Slider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export class DetailsCar extends Component {
  static navigationOptions = {
    title: 'Detalhes do Pedido',
  };

  constructor(props) {
    super(props);
    this.state = {
      placa_carro: '',
      loading: false,
      value: 200,
      showCard: false,
    };
  }

  requestBoard = async () => {
    this.setState(
      {
        loading: !this.state.loading,
      },
      async () => {
        const response = await api.get(
          'https://hacka-gr1d-api.herokuapp.com/search_by_board/' +
            this.state.placa_carro
        );

        this.setState({
          loading: !this.state.loading,
          placa_carro: '',
          showCard: !this.state.showCard,
        });

        console.log(response.data);
      }
    );
  };

  render() {
    const { placa_carro, showCard, loading } = this.state;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TitleScreen>
            Precisamos de mais algumas informacoes para criar a proposta
          </TitleScreen>
          <TitleScreen> Informe a placa do carro ou sua identidade</TitleScreen>
          <TextInput
            value={placa_carro}
            onChangeText={text =>
              this.setState({
                placa_carro: text,
              })
            }
            placeholder="Digite a placa"
            style={{
              marginTop: 10,
              fontSize: 18,
              backgroundColor: '#fefefe',
              borderColor: '#cecece',
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
            }}
          />
          <ButtonSendProposal onPress={this.requestBoard}>
            {loading ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Text style={{ color: '#FFF' }}>PESQUISAR</Text>
            )}
          </ButtonSendProposal>
          {showCard && <Card />}

          <View
            style={{
              flex: 1,
              alignItems: 'stretch',
              justifyContent: 'center',
            }}>
            <TitlePaymentMetric>
              Até quanto esta disposto a pagar ...
            </TitlePaymentMetric>
            <Slider
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
              step={1}
              maximumValue={5000}
              minimumValue={200}
            />
            <Text>Value: {this.state.value}</Text>
          </View>
          <ButtonSend>
            <Text style={{ color: '#FFF' }}>ENVIAR PROPOSTA</Text>
          </ButtonSend>
        </ScrollView>
      </Container>
    );
  }
}

export default DetailsCar;
