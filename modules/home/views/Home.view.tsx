import React from 'react';
import tw from 'twin.macro';
import {Text, Layout, Icon, NeuBox} from 'components/atoms';
import {Roles} from '../components';
import {projectData} from '../Data.home';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Home: React.FC = () => {
  return (
    <Layout.Page>
      <Layout.Section css={tw`relative`}>
        <Icon.NavSetting css={tw`absolute top-1 right-5 cursor-pointer`} />
        <Text.HeadlineTwo>Hi there,</Text.HeadlineTwo>
        <Text.HeadlineOne css={tw`-mt-3`}>I am William</Text.HeadlineOne>
        <Text.Custom css={tw`font-medium text-2xl italic -mt-4 mb-3`}>
          Software Engineer
        </Text.Custom>
      </Layout.Section>

      <Layout.Section css={tw`mb-6`}>
        <Roles />
      </Layout.Section>

      <Layout.Section>
        <Text.HeadlineThree css={tw`mb-3`}>Recent projects</Text.HeadlineThree>
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
    </Layout.Page>
  );
};

export default Home;
