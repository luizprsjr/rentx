import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `,

  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
  `,

  CarImages: styled.View`
    margin-top: ${getStatusBarHeight() + 28}px;
  `,

  Content: styled.ScrollView.attrs({
    contentContainerStyle: {
      padding: 24,
      alignItems: 'center',
    },
    showsVerticalScrollIndicator: false,
  })``,

  Details: styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 38px;
  `,

  Description: styled.View``,

  Brand: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,

  Name: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
  `,

  Rent: styled.View``,

  Period: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,

  Price: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(25)}px;
  `,

  About: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;
    margin-top: 23px;
  `,
};
