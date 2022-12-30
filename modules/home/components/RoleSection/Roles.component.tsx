import React from 'react';
import tw from 'twin.macro';
import {
  CodeBracketIcon,
  CommandLineIcon,
  WindowIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import {Text, NeuBox} from 'components/atoms';

const RolesContainer = tw.div`flex gap-2 mb-2 above1280:(gap-5 mb-5)`;

const Roles: React.FC = () => {
  return (
    <React.Fragment>
      <RolesContainer>
        <NeuBox.Base css={tw`flex-1 above1280:(shadow-neu-wide border-[5px])`}>
          <div css={tw`flex`}>
            <div
              css={tw`inline-block border-r-2 above1280:border-r-[3px] border-bunker bg-chalky p-1`}>
              <CodeBracketIcon
                css={tw`h-7 w-7 below393:(h-6 w-6) above1280:(h-12 w-12) text-bunker`}
              />
            </div>
            <div css={tw`bg-portage w-full px-2 below393:px-[4px]`}>
              <div css={tw`flex items-center h-full`}>
                <Text.CaptionHead
                  css={tw`w-full whitespace-nowrap above1280:(text-xl ml-3) overflow-hidden`}>
                  Frontend Engineer
                </Text.CaptionHead>
              </div>
            </div>
          </div>
        </NeuBox.Base>
        <NeuBox.Base css={tw`flex-1 above1280:(shadow-neu-wide border-[5px])`}>
          <div css={tw`flex`}>
            <div
              css={tw`inline-block border-r-2 above1280:border-r-[3px] border-bunker bg-chalky p-1`}>
              <CommandLineIcon
                css={tw`h-7 w-7 below393:(h-6 w-6) above1280:(h-12 w-12) text-bunker`}
              />
            </div>
            <div css={tw`bg-portage w-full px-2 below393:px-[4px]`}>
              <div css={tw`flex items-center h-full`}>
                <Text.CaptionHead
                  css={tw`w-full whitespace-nowrap above1280:(text-xl ml-3) overflow-hidden`}>
                  Web Developer
                </Text.CaptionHead>
              </div>
            </div>
          </div>
        </NeuBox.Base>
      </RolesContainer>

      <RolesContainer>
        <NeuBox.Base css={tw`flex-1 above1280:(shadow-neu-wide border-[5px])`}>
          <div css={tw`flex`}>
            <div
              css={tw`inline-block border-r-2 above1280:border-r-[3px] border-bunker bg-chalky p-1`}>
              <WindowIcon
                css={tw`h-7 w-7 below393:(h-6 w-6) above1280:(h-12 w-12) text-bunker`}
              />
            </div>
            <div css={tw`bg-portage w-full px-2 below393:px-[4px]`}>
              <div css={tw`flex items-center h-full`}>
                <Text.CaptionHead
                  css={tw`w-full whitespace-nowrap above1280:(text-xl ml-3) overflow-hidden`}>
                  UI Designer
                </Text.CaptionHead>
              </div>
            </div>
          </div>
        </NeuBox.Base>
        <NeuBox.Base css={tw`flex-1 above1280:(shadow-neu-wide border-[5px])`}>
          <div css={tw`flex`}>
            <div
              css={tw`inline-block border-r-2 above1280:border-r-[3px] border-bunker bg-chalky p-1`}>
              <ComputerDesktopIcon
                css={tw`h-7 w-7 below393:(h-6 w-6) above1280:(h-12 w-12) text-bunker`}
              />
            </div>
            <div css={tw`bg-portage w-full px-2 below393:px-[4px]`}>
              <div css={tw`flex items-center h-full`}>
                <Text.CaptionHead
                  css={tw`w-full whitespace-nowrap above1280:(text-xl ml-3) overflow-hidden`}>
                  Web Designer
                </Text.CaptionHead>
              </div>
            </div>
          </div>
        </NeuBox.Base>
      </RolesContainer>
    </React.Fragment>
  );
};

export default Roles;
