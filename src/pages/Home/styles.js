import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 100px 30px 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const TitlePage = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const BoxChoice = styled.TouchableOpacity`
  height: 20%;
  width: 47%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #cecece;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TitleBox = styled.Text`
  font-size: 20;
  font-weight: bold;
`;
