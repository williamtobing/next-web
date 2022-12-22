import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import {Text, Layout, Icon, NeuBox} from 'components/atoms';
import {Roles} from '../components';
import {projectData, timelineData, techStackData} from '../Data.home';

import {format} from 'date-fns';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const SliderBoxStyle = tw`flex justify-center items-center bg-white min-w-[120px] h-[160px] rounded-lg overflow-hidden duration-1000 ease-out`;
const SliderContentBox = tw.div`relative hover:scale-150 duration-1000 ease-out mt-[9px]`;
const TechTextStyle = tw`absolute top-1/2 left-1/2 [transform:translate(-50%, -50%)] text-transparent font-bold text-[1.5vw] px-20 pt-20 pb-20 duration-1000 ease-out`;

const Home: React.FC = () => {
  return (
    <Layout.Page>
      <Layout.Section css={tw`relative`}>
        <Link href="/about" passHref>
          <span>
            <Icon.NavSetting css={tw`absolute top-1 right-5 cursor-pointer`} />
          </span>
        </Link>
        <Text.HeadlineTwo>Hi there,</Text.HeadlineTwo>
        <Text.HeadlineOne css={tw`-mt-3`}>
          I am <span css={tw`text-daisy-bush`}>William</span>
        </Text.HeadlineOne>
        <Text.Custom
          css={tw`font-medium text-2xl mini:text-[6.1vw] italic -mt-4 mb-3`}>
          Software Engineer
        </Text.Custom>
      </Layout.Section>

      <Layout.Section>
        <Roles />
      </Layout.Section>

      <Layout.Section>
        <Text.HeadlineThree css={tw`mt-6 mb-3`}>
          Recent projects
        </Text.HeadlineThree>
      </Layout.Section>

      <Layout.Section>
        <Splide
          tag="div"
          options={{
            perPage: 1,
            perMove: 1,
            rewind: false,
            autoplay: false,
            arrows: false,
            autoWidth: true,
            pauseOnHover: false,
            type: 'loop',
            gap: '0.75rem',
          }}>
          {projectData.map((item, i) => (
            <SplideSlide style={{paddingBottom: '0.25rem'}} key={i}>
              <NeuBox.Base
                css={[
                  tw`flex justify-center items-center min-w-[100px] h-[100px]`,
                  item.bgColor,
                ]}>
                {item.logo}
              </NeuBox.Base>
            </SplideSlide>
          ))}
        </Splide>
      </Layout.Section>

      <Layout.Section>
        <Text.HeadlineThree css={tw`mt-1 mb-3`}>Timeline</Text.HeadlineThree>
      </Layout.Section>

      <Layout.Section>
        {timelineData.map((item, i) => (
          <NeuBox.Base css={tw`bg-portage mb-3`} key={i}>
            <div css={tw`flex px-[18px] mini:px-3 py-3`}>
              <Text.SubtitleOne
                css={tw`text-chalky w-1/3 max-w-[88px] mini:w-[30%]`}>
                {format(item.date, 'MMM yyyy')}
              </Text.SubtitleOne>
              <Text.SubtitleOne css={tw`text-my-white mini:w-[70%]`}>
                {item.description}
              </Text.SubtitleOne>
            </div>
          </NeuBox.Base>
        ))}
      </Layout.Section>

      <Layout.Section>
        <Text.HeadlineThree css={tw`mt-6 mb-3`}>Tech Stack</Text.HeadlineThree>
      </Layout.Section>

      <Layout.Section>
        <Splide
          tag="div"
          options={{
            perPage: 1,
            perMove: 1,
            interval: 5000,
            rewind: true,
            autoplay: true,
            arrows: false,
            autoWidth: true,
            pauseOnHover: false,
            type: 'loop',
            gap: '0.75rem',
          }}>
          {techStackData.map((item, i) => (
            <SplideSlide style={{paddingBottom: '0.25rem'}} key={i}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <NeuBox.Base css={[SliderBoxStyle, item.neuStyle]}>
                  <SliderContentBox>
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
      </Layout.Section>
    </Layout.Page>
  );
};

export default Home;
