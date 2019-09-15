import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  border-radius: 10px;
  border-color: #cecece;
  border-width: 1px;
  margin: 10px 0;
  padding: 10px;
`;

export const FirstLine = styled.View`
  /* background-color: orange; */
  width: 100%;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TextFirstLine = styled.Text`
  font-size: 14;
  font-weight: bold;
  margin-left: 10px;
`;

export const SecondLine = styled.View`
  height: 200px;
  /* background-color: yellow; */
  width: 100%;
  padding: 5px;
`;

export const ThirdLine = styled.View`
  /* background-color: orange; */
  width: 100%;
`;
