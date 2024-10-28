import React from 'react'
import { Link } from 'react-router-dom'

function ButTon() {
  return (
    <>
    
    <Link to="/">
    <button class="cursor-pointer transition-all bg-[#0A1128] text-white px-[50px] py-2 rounded-lg
border-[#0A1128] hover:bg-[#0A1178]
active:brightness-90 active:translate-y-[3px]">
  Sign In
</button>
  </Link>
  
  </>
  )
}

export default ButTon