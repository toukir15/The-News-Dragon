import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

export default function Category() {
  // const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2>This is category: {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
}
