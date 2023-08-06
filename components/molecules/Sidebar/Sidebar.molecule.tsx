import React, {useEffect, useState} from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import {Text, Illustration} from 'components/atoms';

import {navOptions} from './Data.sidebar';

type Props = {
  isOpen: boolean;
  onClickOutside(): void;
};

const NavOverlay = tw.div`fixed w-full h-full bg-bunker/50 z-20`;
const navStyle = tw`fixed bg-portage w-[80%] max-w-[512px] border-l-4 border-bunker h-full duration-500 ease-out z-30`;

const Sidebar: React.FC<Props> = ({isOpen, onClickOutside}) => {
  const [path, setPath] = useState<string>();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <React.Fragment>
      <NavOverlay
        css={[!isOpen && tw`-right-full`]}
        onClick={() => onClickOutside()}
      />

      <nav css={[isOpen ? tw`right-0` : tw`-right-full`, navStyle]}>
        <ul css={tw`pt-10 pr-6`}>
          {navOptions.map((item, i) => (
            <li css={tw`text-right mb-8`} key={i}>
              <Link href={item.value} passHref>
                <Text.HeadlineTwo
                  css={[
                    tw`cursor-pointer inline-block`,
                    item.value === path
                      ? tw`text-chalky`
                      : tw`text-my-white hover:text-chalky`,
                  ]}>
                  {item.label}
                </Text.HeadlineTwo>
              </Link>
              {item.value === path && (
                <>
                  <br />
                  <Illustration.Vector218
                    css={tw`float-right w-40 h-5 -mt-1 block`}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
