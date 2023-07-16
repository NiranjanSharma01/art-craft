import React from 'react'

export const Man = () => {
    const products=[
        {
            url:"https://th.bing.com/th/id/OIP.QSBlqfC_Bz18-KgO6CythwHaEo?pid=ImgDet&rs=1",
             para:"Min. 40% off"
          },
          {
            url:"https://th.bing.com/th/id/OIP.u8RmBhfw7SMuyGnW_g430gHaFS?pid=ImgDet&rs=1",
             para:"Min. 40% off"
          },
    ]

  return (
    
    <div>
      <header>
        <h1>Man's Clothes</h1>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );

} 
export default Man;
