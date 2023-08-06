import React from 'react';
import tw from 'twin.macro';
import {Text, Icon} from 'components/atoms';

const FooterContainer = tw.div`bg-dark-gunmetal px-6 py-5`;
const CopyrightContainer = tw.div`bg-bunker px-6`;

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <Text.CaptionHead css={tw`text-my-white mb-6`}>
          This website is a site that I developed myself for personal
          publication purposes. Thank you for visiting my website. May we all be
          well and always in good health.
        </Text.CaptionHead>
        <Text.CaptionHead css={tw`text-my-white mb-3`}>
          Best regards,
        </Text.CaptionHead>
        <Text.CaptionHead css={tw`text-my-white`}>William S L</Text.CaptionHead>
        <div css={tw`flex justify-end -mt-9`}>
          <a
            href="https://www.linkedin.com/in/williamtobing/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="cursor-pointer">
              <Icon.LinkedIn css={tw`mr-1.5`} />
            </span>
          </a>
          <a
            href="https://github.com/williamtobing"
            target="_blank"
            rel="noopener noreferrer">
            <span className="cursor-pointer">
              <Icon.Github />
            </span>
          </a>
        </div>
      </FooterContainer>
      <CopyrightContainer css={tw`pt-2.5 pb-12 above1280:pb-14`}>
        <Text.CaptionHead css={tw`text-my-white text-center`}>
          Copyright © 2023 | William Suarez Lumbantobing
        </Text.CaptionHead>
      </CopyrightContainer>
    </React.Fragment>
  );
};

export default Footer;
