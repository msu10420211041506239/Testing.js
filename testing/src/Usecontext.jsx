import React, { createContext } from 'react'
import Usestate from './Usestate'
export const context=createContext()
const Usecontext = () => {
    const data="sdbgv hsegrduhv b svgruhd bedvfguh"
  return (
    <context.Provider value={data}>
    <div>
<Usestate />
    </div>
    </context.Provider>
  )
}

export default Usecontext