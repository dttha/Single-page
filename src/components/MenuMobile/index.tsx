import { INavItem } from '../../model';
import styles from './menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MenuItemMobile } from './components/MenuItem';
import { Drawer } from 'antd';
interface IMenuMobile {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: INavItem[];
}


export default function MenuMobile(props: IMenuMobile) {
  console.log(props.data);
  return (
    <Drawer
      handler={false}
      visible={props.open}
      placement="left"
      width="20vw"
      level={null}
      className={styles.drawer}
      onClose={() => {
        props.setOpen(false)
      }}
      bodyStyle={{ backgroundColor: "#13157F" }}
      headerStyle={{ backgroundColor: "#13157F", color: "#fff" }}
      closeIcon={<FontAwesomeIcon icon={faClose} color="#fff"></FontAwesomeIcon>}
    >
      {
        props.data.map((item, index) => {
          const key = Math.round(Math.random() * 10)
          return <MenuItemMobile key={key} item={item}></MenuItemMobile>
        })
      }
    </Drawer>
  )
}

