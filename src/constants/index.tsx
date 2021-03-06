import { INavItem } from "../model";

export const MENU: INavItem[] = [
  {
    title: 'Product',
    href: '/product',
    subMenu: [
      {
        title: 'Shooes',
        href: '/product/1',
        subMenu: [
          {
            title: 'Theme gallery',
            href: '/product/2',
            subMenu: [
              {
                title: 'Blog',
                href: '/product/3'
              }
            ]
          },
          {
            title: 'Blog',
            href: '/product/3'
          }
        ]
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
    href: '/gallery'
  },
  {
    title: 'Blog',
    href: '/blog',
    subMenu: [
      {
        title: 'Blog 1',
        href: '/blog'
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
