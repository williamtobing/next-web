import tw from 'twin.macro';
import {BeakerIcon} from '@heroicons/react/24/solid';
import {Text} from './atoms';

const Overlay = () => {
  return (
    <div
      css={[true ? tw`fixed bottom-2 w-full flex flex-col z-50` : tw`hidden`]}>
      {/* disable responsive temporary */}
      {/* <div css={tw`flex justify-center md:justify-end animate-pulse`}> */}
      <div css={tw`flex justify-center w-[512px] animate-pulse`}>
        <BeakerIcon css={tw`h-6 w-6 mx-2 text-bunker`} />
        <Text.CaptionHead css={tw`tracking-widest`}>
          Revamp in progress...
        </Text.CaptionHead>
        <BeakerIcon css={tw`h-6 w-6 mx-2 text-bunker`} />
      </div>
    </div>
  );
};

export default Overlay;
