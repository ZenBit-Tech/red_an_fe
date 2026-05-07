import {
  type ComponentPropsWithoutRef,
  createElement,
  forwardRef,
} from "react";

type LazyImageProps = ComponentPropsWithoutRef<"img">;

const lazyImageDefaultLoading = "lazy";
const lazyImageDefaultDecoding = "async";

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  ({ loading, decoding, ...props }, ref) => {
    return createElement("img", {
      ...props,
      ref,
      loading: loading ?? lazyImageDefaultLoading,
      decoding: decoding ?? lazyImageDefaultDecoding,
    });
  },
);

LazyImage.displayName = "LazyImage";

export default LazyImage;
