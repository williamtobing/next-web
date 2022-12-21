import tw from 'twin.macro';
import {BeakerIcon} from '@heroicons/react/24/solid';
import {Text} from './atoms';

const Overlay = () => {
  return (
    <div
      css={[
        true
          ? tw`fixed bottom-0 w-full bg-daisy-bush/75 max-w-[512px] flex flex-col z-50`
          : tw`hidden`,
      ]}>
      {/* disable responsive temporary */}
      {/* <div css={tw`flex justify-center md:justify-end animate-pulse`}> */}
      <div css={tw`flex justify-center py-1.5 animate-pulse`}>
        <BeakerIcon css={tw`h-6 w-6 mx-2 text-my-white`} />
        <Text.CaptionHead css={tw`text-my-white tracking-widest`}>
          Revamp in progress...
        </Text.CaptionHead>
        <BeakerIcon css={tw`h-6 w-6 mx-2 text-my-white`} />
      </div>
    </div>
  );
};

export default Overlay;
