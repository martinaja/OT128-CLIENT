import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import logo from './logo-bco.png'
import { arrayData } from './data'

import { useSelector } from 'react-redux'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  let { pathname = '' } = useLocation()

  const userAuth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <div id="main-header">
      <NavBar toggle={toggle} pathname={pathname} userAuth={userAuth} />
      <SideBar toggle={toggle} isOpen={isOpen} userAuth={userAuth} />
    </div>
  )
}

export default Header

const NavBar = ({ toggle, pathname, userAuth }) => (
  <nav className={styles.navbar}>
    <div className={styles.navbarContainer}>
      <Link className={styles.navLogoLink} to="/">
        <img src={logo} className={styles.navLogo} alt="logo" />
      </Link>
      <div className={styles.mobileIcon}>
        <FaBars onClick={toggle} />
      </div>
      <ul className={styles.navMenu}>
        {arrayData.map((link, key) => (
          <li
            className={` ${styles.navItem}  ${
              pathname === link.path ? styles.navLinksActive : ''
            }`}
            key={key}
          >
            <Link className={styles.navLinks} to={link.path}>
              {link.pathName}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navBtn}>
        {userAuth ? (
          <Link className={styles.navBtnLink} to="/backoffice">
            BackOffice
          </Link>
        ) : (
          <Link className={styles.navBtnLink} to="/login">
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  </nav>
)

const SideBar = ({ toggle, isOpen, userAuth }) => (
  <aside
    className={styles.sidebarContainer}
    style={
      isOpen ? { opacity: '100%', top: '0' } : { opacity: '0', top: '-100%' }
    }
    onClick={toggle}
  >
    <div className={styles.icon}>
      <FaTimes className={styles.closeIcon} />
    </div>
    <div className={styles.sidebarWrapper}>
      <ul className={styles.sidebarMenu}>
        {arrayData.map((link, key) => (
          <li className={styles.sidebarLink} key={key}>
            <Link className={styles.sidebarLink} to={link.path}>
              {link.pathName}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.sidebarBtnWrap}>
        {userAuth ? (
          <Link className={styles.sidebarRoute} to="/backoffice">
            BackOffice
          </Link>
        ) : (
          <Link to={'/login'} className={styles.sidebarRoute}>
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  </aside>
)
