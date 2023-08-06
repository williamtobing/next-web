import React, {useCallback, useState} from 'react';
import tw from 'twin.macro';
import {Layout, Logo, Text, Icon} from 'components/atoms';
import {Sidebar} from 'components/molecules';

const Projects: React.FC = () => {
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
            <Text.SubtitleOne>Projects Temporary Page</Text.SubtitleOne>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam minima incidunt inventore, temporibus praesentium maxime
              corrupti eveniet, accusamus quibusdam ipsum, numquam delectus esse
              sed saepe eius illum nesciunt corporis.
            </Text.Caption>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              tempora laborum libero in rerum excepturi dolorum hic ratione ex!
              Rerum, iusto placeat? Dolorem dicta dolore obcaecati tempore.
              Eius, illo et!
            </Text.Caption>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam dolor ex veritatis reprehenderit temporibus
              illo. Aperiam architecto impedit recusandae voluptatum dolorem,
              corporis optio cumque, quod, delectus nemo minus ipsam!
            </Text.Caption>
          </div>
        </Layout.Section>
      </Layout.Page>
    </React.Fragment>
  );
};

export default Projects;
