import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FirstContainer = styled.View`
  height: 30%;
  width: 100%;
  padding: 20px;
  flex-direction: row;
`;

export const LeftSide = styled.View`
  width: 60%;
`;
export const RightSide = styled.View`
  width: 40%;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const SecondContainer = styled.View`
  height: 70%;
  width: 100%;
  background-color: yellow;
`;

export const TextProposals = styled.Text`
  font-weight: 400;
  font-size: 15;
`;

export const TitleProposal = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

export const ButtonFinalProposal = styled.TouchableOpacity`
  height: 52px;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: #e52139;
  border-radius: 5px;
`;
