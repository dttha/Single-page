
export interface INavItem {
  title: string;
  href: string;
  subMenu?: INavItem[];
  className?: string;
}
