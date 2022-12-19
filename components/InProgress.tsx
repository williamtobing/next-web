import tw from 'twin.macro';
import {BeakerIcon} from '@heroicons/react/outline';
import {Text} from './atoms';

const InProgress = () => {
  return (
    <div
      css={[true ? tw`fixed bottom-2 w-full flex flex-col z-50` : tw`hidden`]}>
      <div css={tw`flex justify-center md:justify-end animate-pulse`}>
        <BeakerIcon css={tw`h-6 w-6 mx-2 text-bunker`} />
        <Text.CaptionHead css={tw`tracking-widest`}>
          {/* UNDER DEVELOPMENT */}
          Revamp in progress
        </Text.CaptionHead>
        <BeakerIcon css={tw`h-6 w-6 mx-2 text-bunker`} />
      </div>
    </div>
  );
};

export default InProgress;
