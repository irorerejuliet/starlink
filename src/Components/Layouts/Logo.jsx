import React from 'react'

const Logo = ({logoStyle}) => {
  return (
    <>
    <a href="/"><img src="/images/logo.png" alt="Logo" className={logoStyle}/></a>
    </>
  )
}

export default Logo
