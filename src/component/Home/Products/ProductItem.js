import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from '../../UI/Card/Card';
import classes from './ProductItem.module.css';


const ProductItem = ({product}) => {
 
  const productId = product.id;
  // /Ecommerce/:productId
  return (
    <Card className={classes.item}>
     <Link to={`/Ecommerce/${productId}`}>
      <img src={product.thumbnail}/>
      <h4>{product.title}</h4>
    
      <h5>{product.price}$</h5>
      <span>{product.rating}</span>
      </Link>
    </Card>
 
  )
}

export default ProductItem
