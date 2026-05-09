import type { SVGProps } from "react";

declare module "*.svg" {
  const component: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  export default component;
}
