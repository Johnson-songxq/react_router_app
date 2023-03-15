import { Link } from "react-router-dom";

const products = [
  { id: "1212", name: "produt 1" },
  { id: "1213", name: "produt 2" },
  { id: "1214", name: "produt 3" },
  { id: "1215", name: "produt 4" },
];

const Products = () => {
  return (
    <div>
      <h1>My Products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
