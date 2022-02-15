import { Container } from '@mui/material'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PrivateRoute, privateRoutes } from '../../Router/PrivateRoutes'
import BackOfficeContent from './BackOfficeContent'
import HeaderBackoffice from './HeaderBackoffice'

const BackOfficeHome = () => {
  return (
    <>
      <HeaderBackoffice />
      <Container>
        <BackOfficeContent />
        <Switch>
          {privateRoutes.map(({ path, exact, component: Component }) => {
            return (
              <PrivateRoute key={path} path={path} exact={exact}>
                {Component ? <Component /> : null}
              </PrivateRoute>
            )
          })}
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Container>
    </>
  )
}

export default BackOfficeHome
