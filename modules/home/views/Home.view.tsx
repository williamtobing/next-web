import React, {useCallback, useState} from 'react';
import tw from 'twin.macro';
import {Text, Layout, Icon, NeuBox} from 'components/atoms';
import {Sidebar} from 'components/molecules';
import {Roles, Stacks} from '../components';
import {projectData, timelineData} from '../Data.home';

import {format} from 'date-fns';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Home: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarVisibility = useCallback(() => {
    setSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <React.Fragment>
      <Sidebar
        isOpen={isSidebarOpen}
        onClickOutside={handleSidebarVisibility}
      />
      <Layout.Page>
        <Layout.Section css={tw`relative`}>
          <span onClick={() => setSidebarOpen(true)}>
            <Icon.NavSetting css={tw`absolute top-1 right-5 cursor-pointer`} />
          </span>
          <Text.HeadlineTwo>Hi there,</Text.HeadlineTwo>
          <Text.HeadlineOne css={tw`-mt-3`}>
            I am <span css={tw`text-daisy-bush`}>William</span>
          </Text.HeadlineOne>
          <Text.Custom
            css={tw`font-medium text-2xl max393:text-[6.1vw] italic -mt-4 mb-3`}>
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
              <div css={tw`flex px-[18px] max393:px-3 py-3`}>
                <Text.SubtitleOne
                  css={tw`text-chalky w-1/3 max-w-[88px] max393:w-[30%] whitespace-nowrap overflow-hidden`}>
                  {format(item.date, 'MMM yyyy')}
                </Text.SubtitleOne>
                <Text.SubtitleOne
                  css={tw`text-my-white max393:w-[70%] whitespace-nowrap overflow-hidden`}>
                  {item.description}
                </Text.SubtitleOne>
              </div>
            </NeuBox.Base>
          ))}
        </Layout.Section>

        <Layout.Section>
          <Text.HeadlineThree css={tw`mt-6 mb-3`}>
            Tech Stacks
          </Text.HeadlineThree>
        </Layout.Section>

        <Layout.Section>
          <Stacks />
        </Layout.Section>
      </Layout.Page>
    </React.Fragment>
  );
};

export default Home;
