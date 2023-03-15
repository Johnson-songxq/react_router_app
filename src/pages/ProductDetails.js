import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {productId}</p>
      <button>
        {/* relative means path wise, not father/children wise */}
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </div>
  );
};

export default ProductDetails;
