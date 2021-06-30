import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import S from './styles';

export function CarDetails() {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => {}} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imagesUrl={[
            'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
          ]}
        />
      </S.CarImages>
    </S.Container>
  );
}
