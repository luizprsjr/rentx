import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
  `,

  Header: styled.View`
    width: 100%;
    height: 113px;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content: flex-end;
    padding: 32px 24px;
  `,

  HeaderContent: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  TotalCars: styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
  `,

  CarList: styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 24,
    },
    showsVerticalScrollIndicator: false,
  })``,
};
