import { INavItem } from '../../model';
import styles from './menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MenuItemMobile } from './coponents/MenuItem';
import { Drawer } from 'antd';
interface IMenuMobile {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: INavItem[];
}

export default function MenuMobile(props: IMenuMobile) {
  return (
    <Drawer
      handler={false}
      visible={props.open}
      placement="left"
      width="300px"
      level={null}
      className={styles.drawer}
      onClose={() => {
        props.setOpen(false)
      }}
      bodyStyle={{ backgroundColor: "#13157F" }}
      headerStyle={{ backgroundColor: "#13157F", color: "#fff" }}
      closeIcon={<FontAwesomeIcon icon={faClose} color="#fff"></FontAwesomeIcon>}
      contentWrapperStyle={{ color: "#fff" }}
    >
      {
        props.data.map((item, index) => {
          return <MenuItemMobile key={index} item={item}></MenuItemMobile>
        })
      }
    </Drawer>
  )
}

