import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeScreen from '../../screens/HomeScreen'
import ProductDetailScreen from '../../screens/ProductDetailScreen'
import LoginScreen from '../../screens/LoginScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import RegisterScreen from '../../screens/RegisterScreen'
import UserListScreen from '../../screens/UserListScreen'
import NotFound from '../NotFound'

import PrivateRoute from '../routes/PrivateRoute'
import AdminPrivateRoute from '../routes/AdminPrivateRoute'
import UserLogHistoryScreen from '../../screens/LogHistoryScreen'
import CartScreen from '../../screens/CartScreen'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/login' component={LoginScreen} />
      <AdminPrivateRoute
        path='/admin/users/logs'
        component={UserLogHistoryScreen}
      />
      <Route path='/register' component={RegisterScreen} />
      <PrivateRoute path='/profile' component={ProfileScreen} />
      <AdminPrivateRoute exact path='/admin/users' component={UserListScreen} />
      <AdminPrivateRoute
        path='/admin/users/page/:pageNumber'
        component={UserListScreen}
      />
      <Route path='/product-details' component={ProductDetailScreen} />
      <Route path='/cart/:id?' component={CartScreen} />

      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes