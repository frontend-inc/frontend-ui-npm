type TiktokPixelProps = {
  tikTokPixelId: string;
};
declare const useTiktok: (props: TiktokPixelProps) => {
  trackAddToCart: (data: any) => void;
  trackCustomEvent: (custom: string) => void;
};
export default useTiktok;
