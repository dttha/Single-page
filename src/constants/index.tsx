import { INavItem } from "../model";

export const MENU: INavItem[] = [
  {
    title: 'Product',
    href: '/product',
    subMenu: [
      {
        title: 'Shooes',
        href: '/product/1'
      },
      {
        title: 'Theme gallery',
        href: '/product/2'
      },
      {
        title: 'Blog',
        href: '/product/3'
      }
    ]
  },
  {
    title: 'Theme gallery',
    href: '/theme-gallery'
  },
  {
    title: 'Blog',
    href: '/blog',
    subMenu: [
      {
        title: 'Blog 1',
        href: '/blog/1'
      },
    ]
  },
  {
    title: 'About us',
    href: '/about-us'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]
