import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import styles from './NavBarPublic.module.css'
import logo from './logo-letras-blancas.png'

import { useDispatch } from 'react-redux'
import { userLogout } from '../../../redux/reducers/authReducer/authReducer'

export const NavBarPublic = ({
  toggle,
  pathname,
  isAuthenticated,
  role,
  arrayDataToShow,
}) => {
  const dispatch = useDispatch()
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link className={styles.navLogoLink} to="/">
          <img src={logo} className={styles.navLogo} alt="logo" />
        </Link>

        <div className={styles.mobileIcon}>
          <FaBars onClick={toggle} />
        </div>

        <ul className={styles.navMenu}>
          {arrayDataToShow.map((link, key) => (
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
          {isAuthenticated ? (
            <>
              <Link
                onClick={() => dispatch(userLogout())}
                className={styles.navBtnLink}
                to={'/'}
              >
                LogOut
              </Link>
              {role !== 'Admin' ? null : (
                <Link className={styles.sidebarRoute} to={'/backoffice'}>
                  BackOffice
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to={'/login'} className={styles.navBtnLink}>
                LogIn
              </Link>
              <Link to={'/register'} className={styles.navBtnLink}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
