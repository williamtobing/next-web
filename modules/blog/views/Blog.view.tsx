import React, {useCallback, useState} from 'react';
import tw from 'twin.macro';
import {Layout, Logo, Text, Icon} from 'components/atoms';
import {Sidebar} from 'components/molecules';

const Blog: React.FC = () => {
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
            <Text.SubtitleOne>Blog Temporary Page</Text.SubtitleOne>
            <Text.Caption>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae laudantium quidem consequatur illum recusandae vitae
              provident delectus, ullam possimus. Tempore ipsam velit rem sed!
              Ipsa quidem autem molestiae dolorum ex!
            </Text.Caption>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque architecto alias fugiat ratione? Voluptatum dolore,
              veniam fugiat nulla iste quod autem neque esse eius. Ipsa tempore
              labore facilis nemo laborum.
            </Text.Caption>
            <Text.Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quo magni fugit eum velit ex numquam, rerum officiis dolor
              voluptatum id, magnam ducimus aut hic esse vitae laborum
              recusandae voluptas?
            </Text.Caption>
          </div>
        </Layout.Section>
      </Layout.Page>
    </React.Fragment>
  );
};

export default Blog;
