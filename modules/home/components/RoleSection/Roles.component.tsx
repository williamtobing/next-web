import React from 'react';
import tw from 'twin.macro';
import {
  CodeBracketIcon,
  CommandLineIcon,
  WindowIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import {Text, NeuBox} from 'components/atoms';

const RolesContainer = tw.div`flex gap-2 mb-2`;

const Roles: React.FC = () => {
  return (
    <>
      <RolesContainer>
        <NeuBox.Base css={tw`flex-1`}>
          <div css={tw`flex`}>
            <div css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
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
            <div css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
              <CommandLineIcon css={tw`h-7 w-7 text-bunker`} />
            </div>
            <div css={tw`bg-portage w-full pr-2`}>
              <div css={tw`flex items-center h-full w-full pl-2`}>
                <Text.CaptionHead>Web Developer</Text.CaptionHead>
              </div>
            </div>
          </div>
        </NeuBox.Base>
      </RolesContainer>

      <RolesContainer>
        <NeuBox.Base css={tw`flex-1`}>
          <div css={tw`flex`}>
            <div css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
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
            <div css={tw`inline-block border-r-2 border-bunker bg-chalky p-1`}>
              <ComputerDesktopIcon css={tw`h-7 w-7 text-bunker`} />
            </div>
            <div css={tw`bg-portage w-full pr-2`}>
              <div css={tw`flex items-center h-full w-full pl-2`}>
                <Text.CaptionHead>Web Designer</Text.CaptionHead>
              </div>
            </div>
          </div>
        </NeuBox.Base>
      </RolesContainer>
    </>
  );
};

export default Roles;
