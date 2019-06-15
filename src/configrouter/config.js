
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboad from '../components/Dashboard'
import Content from '../components/Content'
import User from '../components/UserManager'
import Redirect from '../components/Redirect'

export default [
    {
        path: "/login",
        component: Login
      },
      {
        path: "/register",
        component: Register
      },
      {
        path: "/",
        exact : true,
        component: Redirect
      },     
      {
        path: "/db",
        component: Dashboad,
        routes: [
          {
            exact : true,
            path: "/db",
            component: Content
          },
          {
            path: "/db/user",
            component: User
          }
        ]
      }
]