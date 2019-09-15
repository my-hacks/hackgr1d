import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
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
          <BoxChoice onPress={() => navigation.navigate('Family')}>
            <Icon name="cellphone" size={30} color="#9dca83" />
            <TitleBox>Eletronicos</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="health" size={30} color="#7A7A7A" />
            <TitleBox>Saude</TitleBox>
          </BoxChoice>
        </Container>
      </>
    );
  }
}

export default Home;
