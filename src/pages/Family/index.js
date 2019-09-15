import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {
  Container,
  BoxPLans,
  LeftSide,
  RightSide,
  BoxIcon,
  BoxCoverage,
} from './styles';
import family from '../../assets/img/family.jpg';
import residencia from '../../assets/img/residencia.jpg';
import velhice from '../../assets/img/velhice.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export class Family extends Component {
  static navigationOptions = {
    title: 'Planos Familiares',
  };
  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BoxPLans>
            <LeftSide>
              <Text>Familia Segura</Text>
              <Text>
                Laborum reprehenderit ullamco fugiat sit velit irure dolor
                pariatur. Do adipisicing duis
              </Text>
              <BoxCoverage>
                <BoxIcon>
                  <Icon name="lock" size={20} color="#FFF" />
                </BoxIcon>
                <BoxIcon>
                  <Icon name="key" size={20} color="#FFF" />
                </BoxIcon>
                <BoxIcon>
                  <Icon name="wrench" size={20} color="#FFF" />
                </BoxIcon>
              </BoxCoverage>
            </LeftSide>
            <RightSide>
              <Image
                source={family}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </RightSide>
          </BoxPLans>
          <BoxPLans>
            <LeftSide>
              <Text>Residencia 100%</Text>
              <Text>
                Laborum reprehenderit ullamco fugiat sit velit irure dolor
                pariatur. Do adipisicing duis
              </Text>
              <BoxCoverage>
                <BoxIcon style={{backgroundColor: '#287BB1'}}>
                  <Icon name="lock" size={20} color="#FFF" />
                </BoxIcon>
                <BoxIcon style={{backgroundColor: '#287BB1'}}>
                  <Icon name="key" size={20} color="#FFF" />
                </BoxIcon>
                <BoxIcon style={{backgroundColor: '#287BB1'}}>
                  <Icon name="wrench" size={20} color="#FFF" />
                </BoxIcon>
              </BoxCoverage>
            </LeftSide>
            <RightSide>
              <Image
                source={residencia}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </RightSide>
          </BoxPLans>
          <BoxPLans>
            <LeftSide>
              <Text>Melhor Idade</Text>
              <Text>
                Laborum reprehenderit ullamco fugiat sit velit irure dolor
                pariatur. Do adipisicing duis
              </Text>
              <BoxCoverage>
                <BoxIcon style={{backgroundColor: '#463389'}}>
                  <Icon name="lock" size={20} color="#FFF" />
                </BoxIcon>
                <BoxIcon style={{backgroundColor: '#463389'}}>
                  <Icon name="key" size={20} color="#FFF" />
                </BoxIcon>
                <BoxIcon style={{backgroundColor: '#463389'}}>
                  <Icon name="wrench" size={20} color="#FFF" />
                </BoxIcon>
              </BoxCoverage>
            </LeftSide>
            <RightSide>
              <Image
                source={velhice}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </RightSide>
          </BoxPLans>
        </ScrollView>
      </Container>
    );
  }
}

export default Family;
