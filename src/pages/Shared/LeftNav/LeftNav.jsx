import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2>left nav</h2>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="ps-4 text-decoration-none text-black"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
}
