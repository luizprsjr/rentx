import React from 'react';

import S from './styles';

interface IImageSlider {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: IImageSlider) {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage
          source={{
            uri: imagesUrl[0],
          }}
          resizeMode="contain"
        />
      </S.CarImageWrapper>
    </S.Container>
  );
}
