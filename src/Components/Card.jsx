import React from 'react'

const Card = ({children, bg ='bg-gray-600'}) => {
  return (
    <div className={`${bg}space-y-3 border border-gray-600 backdrop-blur-3xl rounded-[7px] md:w-[540px] py-[2.5rem] px-[3rem]`}>
      {children}
    </div>
  );
}

export default Card
