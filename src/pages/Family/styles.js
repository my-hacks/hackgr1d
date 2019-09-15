import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const BoxPLans = styled.View`
  height: 160px;
  border-radius: 10px;
  border-color: 10px;
  border-width: 1px;
  border-color: #000;
  padding: 5px;
  flex-direction: row;
  margin: 10px 5px;
`;

export const LeftSide = styled.View`
  width: 50%;
  height: 100%;
  padding: 10px;
`;

export const RightSide = styled.View`
  width: 50%;
  height: 100%;
`;

export const BoxCoverage = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const BoxIcon = styled.View`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  background-color: #e52139;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
