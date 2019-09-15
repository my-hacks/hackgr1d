import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const TitleScreen = styled.Text`
  font-size: 16;
  color: #555;
  text-align: left;
`;

export const Subtitle = styled.Text`
  color: #000;
`;

export const ButtonSendProposal = styled.TouchableOpacity`
  height: 52;
  width: 100%;
  background-color: #e52139;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
`;

export const TitlePaymentMetric = styled.Text`
  font-size: 15;
  font-weight: bold;
  margin-top: 10px;
`;

export const ButtonSend = styled.TouchableOpacity`
  height: 52;
  width: 100%;
  background-color: #e52139;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
`;
