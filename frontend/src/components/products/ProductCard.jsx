import { Link } from "react-router";
import { formatCurrency } from "../../utils/helper";

import PropTypes from "prop-types";

const ProductCard = ({
  product_name,
  product_image,
  product_id,
  product_price,
}) => {
  return (
    <div className="border p-2 rounded-lg">
      <img
        className="rounded-md w-[500px] h-[300px] object-cover"
        src={product_image}
        alt={product_name}
      />
      <h3 className="text-base lg:text-lg my-2 font-semibold text-green-800">
        {product_name}
      </h3>
      <p className="text-gray-500 mb-2">{formatCurrency(product_price)}</p>
      <Link to={`/marketplace/${product_id}`}>
        <button className="bg-green-500 text-white font-medium rounded-md p-2 w-full">
          View
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product_name: PropTypes.string,
  product_image: PropTypes.string,
  product_id: PropTypes.string,
  product_price: PropTypes.number,
};
