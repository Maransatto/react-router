import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <p>
        Back to the <Link to="/">home page</Link>
      </p>
    </>
  );
}
