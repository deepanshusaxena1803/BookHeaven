import React from 'react'

const Cards = ({item}) => {
    
  return (
    <>
    <div className="mt-5 my-3 p-3">
    <div className="card w-92 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-white dark:text-black ">
  <figure><img src={item.image} alt="Shoes" className="h-48 w-full object-contain" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary dark:text-white">
        {item.category}
      </div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 hover:cursor-pointer">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 hover:cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards