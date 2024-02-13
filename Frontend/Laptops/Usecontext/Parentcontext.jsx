import React, { createContext, useState } from 'react'


export const Appcontext = createContext()
function Parentcontext({children}) {
    const[login,isLogin] = useState(false)
  return (
    <Appcontext.Provider value={{login,isLogin}}>
        {children}
    </Appcontext.Provider>
  )
}

export default Parentcontext