import PropTypes from 'prop-types'
import { ProductCategory } from '../ProductCategory'

/**
 * Table row to display each product needed details
 * @param {product} object Contains each product infos, fetched from the API 
 * @returns JSX element
 */
export const TableProductRow = ({product}) => {
    /**
     * Function to go to the product's page using its id
     */
    const toProductPage = () => {
        window.location = `/product/${product.id}`
    }

    //Limits the number of decimals in prices including VAT
    const priceWithVAT = product.price + product.price*0.2
    
    return (
        <tr onClick={toProductPage}>
            <td className="product-name">{product.title}</td>
            <td><ProductCategory category={product.category} /></td>
            <td className="product-price">{product.price}€</td>
            <td className="product-price-vat">{priceWithVAT.toFixed(2)}€</td>
        </tr>
        
    )
}


TableProductRow.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number,
        priceWithVAT: PropTypes.number
    })
  };