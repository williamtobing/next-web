import React from 'react';
import tw from 'twin.macro';
import {BeakerIcon} from '@heroicons/react/24/solid';
import {Text} from './atoms';

const Overlay: React.FC = () => {
  return (
    <div
      css={[
        true
          ? tw`fixed bottom-0 w-full bg-daisy-bush/75 max-w-lg above1280:max-w-none flex flex-col z-10`
          : tw`hidden`,
      ]}>
      <div css={tw`flex justify-center py-1.5 animate-pulse`}>
        <BeakerIcon css={tw`h-6 w-6 above1280:(h-8 w-8) mx-2 text-my-white`} />
        <Text.CaptionHead css={tw`text-my-white tracking-widest mt-[2.5px]`}>
          Revamp in progress...
        </Text.CaptionHead>
        <BeakerIcon css={tw`h-6 w-6 above1280:(h-8 w-8) mx-2 text-my-white`} />
      </div>
    </div>
  );
};

export default Overlay;
