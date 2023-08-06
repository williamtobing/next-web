import tw from 'twin.macro';

// export const HeadlineOne = tw.h1`font-jakarta font-extrabold below393:text-[12vw] [font-size:49px] above1280:text-[6.667vw] above1440:text-[96px]`;
// export const HeadlineTwo = tw.h2`font-jakarta font-bold below393:text-[9vw] [font-size:36px] above1280:text-[3.611vw] above1440:text-[52px]`;
// export const HeadlineThree = tw.h3`font-jakarta font-bold below393:text-[6vw] [font-size:24px] above1280:text-[2.5vw] above1440:text-[36px] underline`;
// export const SubtitleOne = tw.p`font-jakarta font-bold below393:text-[3.9vw] [font-size:16px] above1280:text-[1.667vw] above1440:text-[24px]`;
// export const CaptionHead = tw.p`font-jakarta font-semibold below393:text-[2.9vw] [font-size:12px] above1280:(text-[1.25vw] font-bold) above1440:(text-[18px] font-bold)`;
// export const Caption = tw.p`font-jakarta font-normal below393:text-[2.9vw] [font-size:12px] above1280:(text-[1.25vw] font-medium) above1440:(text-[18px] font-medium)`;
// export const Custom = tw.p`font-jakarta`;

// ?: fix size on desktop
export const HeadlineOne = tw.h1`font-jakarta font-extrabold [font-size:49px] above1280:([font-size:96px])`;
export const HeadlineTwo = tw.h2`font-jakarta font-bold [font-size:36px] above1280:([font-size:52px])`;
export const HeadlineThree = tw.h3`font-jakarta font-bold [font-size:24px] underline above1280:([font-size:36px])`;
export const SubtitleOne = tw.p`font-jakarta font-bold [font-size:16px] above1280:([font-size:24px])`;
export const CaptionHead = tw.p`font-jakarta font-semibold [font-size:12px] above1280:([font-size:18px] font-bold)`;
export const Caption = tw.p`font-jakarta font-normal [font-size:12px] above1280:([font-size:18px] font-medium)`;
export const Custom = tw.p`font-jakarta`;
