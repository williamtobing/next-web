import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import {Text, Layout, Icon, NeuBox} from 'components/atoms';
import {Roles} from '../components';
import {projectData, timelineData} from '../Data.home';

import {format} from 'date-fns';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Home: React.FC = () => {
  return (
    <Layout.Page>
      <Layout.Section css={tw`relative`}>
        <Link href="/about" passHref>
          <Icon.NavSetting css={tw`absolute top-1 right-5 cursor-pointer`} />
        </Link>
        <Text.HeadlineTwo>Hi there,</Text.HeadlineTwo>
        <Text.HeadlineOne css={tw`-mt-3`}>
          I am <span css={tw`text-daisy-bush`}>William</span>
        </Text.HeadlineOne>
        <Text.Custom css={tw`font-medium text-2xl italic -mt-4 mb-3`}>
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
            interval: 5000,
            rewind: true,
            autoplay: true,
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
            <div css={tw`flex px-5 py-3`}>
              <Text.SubtitleOne css={tw`text-chalky w-[88px]`}>
                {format(item.date, 'MMM yyyy')}
              </Text.SubtitleOne>
              <Text.SubtitleOne css={tw`text-my-white`}>
                {item.description}
              </Text.SubtitleOne>
            </div>
          </NeuBox.Base>
        ))}
      </Layout.Section>
    </Layout.Page>
  );
};

export default Home;
