import React from 'react';
import {Text, Layout, Icon} from 'components/atoms';
import tw from 'twin.macro';

const Home: React.FC = () => {
  return (
    <Layout.SectionContainer css={tw`relative`}>
      <Icon.NavSetting css={tw`absolute top-5 right-5`} />
      <Text.HeadlineTwo>Hi there,</Text.HeadlineTwo>
      <Text.HeadlineOne>I am William</Text.HeadlineOne>
      <Text.Custom css={tw`font-medium text-2xl italic`}>
        Software Engineer
      </Text.Custom>
    </Layout.SectionContainer>
  );
};

export default Home;
