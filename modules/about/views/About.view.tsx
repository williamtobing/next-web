import React from 'react';
import tw from 'twin.macro';
import {Layout, Logo} from 'components/atoms';

const About: React.FC = () => {
  return (
    <React.Fragment>
      <Layout.Section css={tw`flex justify-center items-center pt-10 py-4`}>
        <div css={tw`bg-daisy-bush inline-block p-1 rounded-full`}>
          <Logo.TheLogoOne />
        </div>
      </Layout.Section>

      <Layout.Section css={tw`flex justify-center items-center pb-8`}>
        <div css={tw`inline-block p-1`}>
          <Logo.TheLogoTwo />
        </div>
      </Layout.Section>
    </React.Fragment>
  );
};

export default About;
