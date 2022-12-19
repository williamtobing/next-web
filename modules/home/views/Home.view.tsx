import React from 'react';
import tw from 'twin.macro';
import {
  CodeBracketIcon,
  CommandLineIcon,
  WindowIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import {Text, Layout, Icon, NeuBox, Logo} from 'components/atoms';

const RoleContainer = tw.div`flex gap-2 mb-2`;

const Home: React.FC = () => {
  return (
    <Layout.Page>
      <Layout.Section css={tw`relative`}>
        <Icon.NavSetting css={tw`absolute top-1 right-5`} />
        <Text.HeadlineTwo>Hi there,</Text.HeadlineTwo>
        <Text.HeadlineOne css={tw`-mt-2`}>I am William</Text.HeadlineOne>
        <Text.Custom css={tw`font-medium text-2xl italic -mt-4 mb-3`}>
          Software Engineer
        </Text.Custom>
      </Layout.Section>

      <Layout.Section css={tw`mb-6`}>
        <RoleContainer>
          <NeuBox.Base css={tw`flex-1`}>
            <div css={tw`flex`}>
              <div
                css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
                <CodeBracketIcon css={tw`h-7 w-7 text-bunker`} />
              </div>
              <div css={tw`bg-portage w-full pr-2`}>
                <div css={tw`flex items-center h-full w-full pl-2`}>
                  <Text.CaptionHead>Frontend Engineer</Text.CaptionHead>
                </div>
              </div>
            </div>
          </NeuBox.Base>
          <NeuBox.Base css={tw`flex-1`}>
            <div css={tw`flex`}>
              <div
                css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
                <CommandLineIcon css={tw`h-7 w-7 text-bunker`} />
              </div>
              <div css={tw`bg-portage w-full pr-2`}>
                <div css={tw`flex items-center h-full w-full pl-2`}>
                  <Text.CaptionHead>Web Developer</Text.CaptionHead>
                </div>
              </div>
            </div>
          </NeuBox.Base>
        </RoleContainer>

        <RoleContainer>
          <NeuBox.Base css={tw`flex-1`}>
            <div css={tw`flex`}>
              <div
                css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
                <WindowIcon css={tw`h-7 w-7 text-bunker`} />
              </div>
              <div css={tw`bg-portage w-full pr-2`}>
                <div css={tw`flex items-center h-full w-full pl-2`}>
                  <Text.CaptionHead>UI Designer</Text.CaptionHead>
                </div>
              </div>
            </div>
          </NeuBox.Base>
          <NeuBox.Base css={tw`flex-1`}>
            <div css={tw`flex`}>
              <div
                css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
                <ComputerDesktopIcon css={tw`h-7 w-7 text-bunker`} />
              </div>
              <div css={tw`bg-portage w-full pr-2`}>
                <div css={tw`flex items-center h-full w-full pl-2`}>
                  <Text.CaptionHead>Web Designer</Text.CaptionHead>
                </div>
              </div>
            </div>
          </NeuBox.Base>
        </RoleContainer>
      </Layout.Section>

      <Layout.Section>
        <Text.HeadlineThree css={tw`mb-3`}>Recent projects</Text.HeadlineThree>
      </Layout.Section>

      <Layout.Section css={tw`flex gap-3 pl-6 pr-0`}>
        <NeuBox.Base
          css={tw`flex justify-center items-center bg-kupon-blue min-w-[100px] h-[100px]`}>
          <Logo.PintapKupon />
        </NeuBox.Base>
        <NeuBox.Base
          css={tw`flex justify-center items-center bg-retail-blue min-w-[100px] h-[100px]`}>
          <Logo.PintapRetail css={tw`mt-[6px]`} />
        </NeuBox.Base>
        <NeuBox.Base
          css={tw`flex justify-center items-center bg-mitra-white min-w-[100px] h-[100px]`}>
          <Logo.PintapMitra />
        </NeuBox.Base>
        <NeuBox.Base
          css={tw`flex justify-center items-center bg-axiata-blue min-w-[100px] h-[100px]`}>
          <Logo.Axiata />
        </NeuBox.Base>
      </Layout.Section>
    </Layout.Page>
  );
};

export default Home;
