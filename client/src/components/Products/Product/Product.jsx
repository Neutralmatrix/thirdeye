import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();

  const imageUrl =
    data?.img?.data?.[0]?.attributes?.url
      ? process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
      : "default-image-url"; 

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={imageUrl} alt={data?.title || "Product Image"} />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title || "No Title Available"}</span>
        <span className="price">
          &#8377;{data?.price !== undefined ? data.price : "N/A"}
        </span>
      </div>
    </div>
  );
};

export default Product;
