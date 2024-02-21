import React, { createContext, useState } from 'react'
import Cookies from 'js-cookie'

export const Appcontext = createContext()
function Parentcontext({children}) {
    const[login,isLogin] = useState(false)
    const[token,setToken]= useState(Cookies.get('token'))

    const LogoutUser=()=>{
        setToken("")
        sessionStorage.clear()
        Cookies.remove('token')

    }
  return (
    <Appcontext.Provider value={{login,isLogin,LogoutUser}}>
        {children}
    </Appcontext.Provider>
  )
}

export default Parentcontext