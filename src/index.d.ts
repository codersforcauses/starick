declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
    const component: React.FC<React.SVGProps<SVGSVGElement>>;
  
    export default component;
  }