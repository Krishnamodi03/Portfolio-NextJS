declare module "*.svg" {
  import type { SVGProps } from "react";
  const component: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default component;
}
