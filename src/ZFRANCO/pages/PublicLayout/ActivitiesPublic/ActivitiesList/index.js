import React from 'react'
import styles from '../ActivitiesList/ActivitiesList.module.css'

export const ActivitiesList = () => {
  const activitiesMock = [
    { id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    { id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    { id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
  ]

  return (
    <div>
      <h1>Listado Actividades</h1>
      <ul className={styles.list__container}>
        {activitiesMock.length > 0 ? (
          activitiesMock.map((activity) => {
            return (
              <li className={styles.card__info} key={activity.id}>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
              </li>
            )
          })
        ) : (
          <p>No hay actividades</p>
        )}
      </ul>
    </div>
  )
}
