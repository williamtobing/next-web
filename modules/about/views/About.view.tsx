import React, {useCallback, useState} from 'react';
import tw from 'twin.macro';
import {Layout, Logo, Text, Icon} from 'components/atoms';
import {Sidebar} from 'components/molecules';

const About: React.FC = () => {
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
        <Layout.Section>
          <div
            css={tw`float-right cursor-pointer`}
            onClick={() => setSidebarOpen(true)}>
            <Icon.NavSetting />
          </div>
        </Layout.Section>

        <Layout.Section css={tw`flex justify-center items-center pt-2 pb-8`}>
          <div
            css={tw`bg-daisy-bush p-1 rounded-full animate-[spin_200s_linear_infinite]`}>
            <Logo.TheLogoOne />
          </div>
        </Layout.Section>

        <Layout.Section css={tw`flex justify-center items-center pb-8`}>
          <div css={tw`inline-block p-1 space-y-2`}>
            <Logo.TheLogoTwo css={tw`hidden`} />
            <Text.SubtitleOne>About Temporary Page</Text.SubtitleOne>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              aliquam voluptas cumque ab ea eveniet aperiam quibusdam cum quidem
              nesciunt odio ipsa, dolore quasi exercitationem vel tempora, quia
              atque quod.
            </Text.Caption>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              modi voluptatibus ad delectus id cum veniam eos quo aspernatur
              eaque natus fugiat architecto, quaerat enim ducimus voluptas quia
              nisi sapiente!
            </Text.Caption>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quisquam quos architecto, ullam nemo natus perferendis asperiores
              ad similique earum molestiae doloremque deserunt dignissimos
              praesentium, dicta culpa error quis ipsa.
            </Text.Caption>
          </div>
        </Layout.Section>
      </Layout.Page>
    </React.Fragment>
  );
};

export default About;
