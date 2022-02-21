import { useDispatch } from 'react-redux'
import { userLogout } from '../../../redux/reducers/authReducer/authReducer'

import styles from './SideBarPublic.module.css'
import { FaTimes } from 'react-icons/fa'

import { Link } from 'react-router-dom'

export const SideBarPublic = ({
  toggle,
  isOpen,
  isAuthenticated,
  role,
  arrayDataToShow,
}) => {
  const dispatch = useDispatch()

  return (
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
          {arrayDataToShow.map((link, key) => (
            <li className={styles.sidebarLink} key={key}>
              <Link className={styles.sidebarLink} to={link.path}>
                {link.pathName}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.sidebarBtnWrap}>
          {isAuthenticated ? (
            <>
              <Link
                onClick={() => dispatch(userLogout())}
                className={styles.sidebarRoute}
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
              <Link to={'/login'} className={styles.sidebarRoute}>
                LogIn
              </Link>
              <Link to={'/register'} className={styles.sidebarRoute}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
