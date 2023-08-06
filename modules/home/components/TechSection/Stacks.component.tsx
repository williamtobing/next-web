import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import {techStackData} from 'modules/home/Data.home';
import {Text, NeuBox} from 'components/atoms';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const SliderContentBox = tw.div`relative duration-1000 ease-out mt-[9px]`;
const SliderBoxStyle = tw`flex justify-center items-center bg-white min-w-[120px] h-[160px] rounded-lg overflow-hidden duration-1000 ease-out`;
const TechTextStyle = tw`absolute top-1/2 left-1/2 [transform:translate(-50%, -50%)] text-transparent font-bold text-[16px] px-20 pt-20 pb-20 duration-1000 ease-out`;

const Stacks: React.FC = () => {
  return (
    <Splide
      tag="div"
      options={{
        perPage: 1,
        perMove: 1,
        interval: 5000,
        rewind: true,
        autoplay: false,
        arrows: false,
        autoWidth: true,
        pauseOnHover: false,
        type: 'loop',
        gap: '0.75rem',
      }}>
      {techStackData.map((item, i) => (
        <SplideSlide style={{paddingBottom: '0.25rem'}} key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <NeuBox.Base css={[SliderBoxStyle, tw`above512:hidden`]}>
              <SliderContentBox>
                <Image
                  src={item.source}
                  alt={`${item.text} Logo`}
                  width={100}
                  height={100}
                  css={item.imgStyle}
                  priority
                />
                <Text.SubtitleOne css={[tw`text-center`]}>
                  {item.text}
                </Text.SubtitleOne>
              </SliderContentBox>
            </NeuBox.Base>

            <NeuBox.Base
              css={[SliderBoxStyle, item.neuStyle, tw`hidden above512:flex`]}>
              <SliderContentBox css={[item.contentBoxStyle]}>
                <Image
                  src={item.source}
                  alt={`${item.text} Logo`}
                  width={100}
                  height={100}
                  css={item.imgStyle}
                  priority
                />
                <Text.Custom css={[TechTextStyle, item.textStyle]}>
                  {item.text}
                </Text.Custom>
              </SliderContentBox>
            </NeuBox.Base>
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Stacks;
