import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Container, BoxChoice, TitleBox, TitlePage} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export class Home extends Component {
  static navigationOptions = {
    title: 'Escolha seu Seguro',
  };

  constructor(props) {
    super(props);
    this.state;
  }
  render() {
    const {navigation} = this.props;
    return (
      <>
        <Container>
          <TitlePage style={{textAlign: 'center'}}>
            Escolha seu Seguro
          </TitlePage>
          <ScrollView showsVerticalScrollIndicator={false} />
          <BoxChoice onPress={() => navigation.navigate('DetailsCar')}>
            <Icon name="car" size={30} color="#9d6aed" />
            <TitleBox>Automovel</TitleBox>
          </BoxChoice>

          <BoxChoice>
            <Icon name="home" size={30} color="#287BB1" />
            <TitleBox>Residencia</TitleBox>
          </BoxChoice>
          <BoxChoice onPress={() => navigation.navigate('Family')}>
            <Icon name="group" size={30} color="#ffbb01" />
            <TitleBox>Familiar</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="paw" size={30} color="#E37a7a" />
            <TitleBox>Pet</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="laptop" size={30} color="#9dca83" />
            <TitleBox>Eletronicos</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="plus-square" size={30} color="red" />
            <TitleBox>Saude</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="plane" size={30} color="pink" />
            <TitleBox>Viagens</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="money" size={30} color="black" />
            <TitleBox>Previdencia</TitleBox>
          </BoxChoice>
        </Container>
      </>
    );
  }
}

export default Home;
