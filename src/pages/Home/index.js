import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, BoxChoice, TitleBox, TitlePage } from './styles';
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
    const { navigation } = this.props;
    return (
      <>
        <Container>
          <TitlePage>Escolha seu Seguro</TitlePage>
          <BoxChoice onPress={() => navigation.navigate('DetailsCar')}>
            <Icon name="car" size={30} color="blue" />
            <TitleBox>Automovel</TitleBox>
          </BoxChoice>

          <BoxChoice>
            <Icon name="home" size={30} color="blue" />
            <TitleBox>Residencia</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="group" size={30} color="blue" />
            <TitleBox>Familiar</TitleBox>
          </BoxChoice>
          <BoxChoice>
            <Icon name="paw" size={30} color="blue" />
            <TitleBox>Pet</TitleBox>
          </BoxChoice>
        </Container>
      </>
    );
  }
}

export default Home;
