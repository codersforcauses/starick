declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
  const component: any;

  export default component;
}
