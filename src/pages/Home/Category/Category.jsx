import { useLoaderData, useParams } from "react-router-dom";

export default function Category() {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2>This is category: {categoryNews.length}</h2>
    </div>
  );
}
