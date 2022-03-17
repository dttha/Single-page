export interface INavItem {
  title: string;
  href: string;
  subMenu?: INavItem[];
  className?: string;
}
export interface IPost {
  id: number;
  title: string;
  slug: string;
  publishDate: Date;
  status: string;
}
