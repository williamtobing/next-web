import React from 'react';
import tw from 'twin.macro';
import {Text, Layout, Icon, NeuBox} from 'components/atoms';
import {Roles} from '../components';
import {projectData} from '../Data.home';

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

      <Layout.Section css={tw`flex gap-3 pl-6 pr-0`}>
        {projectData.map((item, i) => (
          <NeuBox.Base
            css={[
              tw`flex justify-center items-center min-w-[100px] h-[100px]`,
              item.bgColor,
            ]}
            key={i}>
            {item.logo}
          </NeuBox.Base>
        ))}
      </Layout.Section>
    </Layout.Page>
  );
};

export default Home;
