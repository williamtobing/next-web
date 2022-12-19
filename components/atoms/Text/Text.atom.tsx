import tw from 'twin.macro';

export const HeadlineOne = tw.h1`font-jakarta font-extrabold [font-size:49px]`;
export const HeadlineTwo = tw.h2`font-jakarta font-bold [font-size:36px]`;
export const HeadlineThree = tw.h3`font-jakarta font-bold [font-size:24px] underline`;
export const SubtitleOne = tw.p`font-jakarta font-bold [font-size:16px]`;
export const CaptionHead = tw.p`font-jakarta font-semibold [font-size:12px]`;
export const Caption = tw.p`font-jakarta font-normal [font-size:12px]`;
export const Custom = tw.p`font-jakarta`;

// disable responsive temporary
// export const HeadlineOne = tw.h1`font-jakarta font-extrabold [font-size:49px] desktop:([font-size:96px])`;
// export const HeadlineTwo = tw.h2`font-jakarta font-bold [font-size:36px] desktop:([font-size:52px])`;
// export const HeadlineThree = tw.h3`font-jakarta font-bold [font-size:24px] underline desktop:([font-size:36px])`;
// export const SubtitleOne = tw.p`font-jakarta font-bold [font-size:16px] desktop:([font-size:24px])`;
// export const CaptionHead = tw.p`font-jakarta font-semibold [font-size:12px] desktop:([font-size:18px] font-bold)`;
// export const Caption = tw.p`font-jakarta font-normal [font-size:12px] desktop:([font-size:18px] font-medium)`;
// export const Custom = tw.p`font-jakarta`;
