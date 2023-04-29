import { Card, Image } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

export default function NewsCard({ news }) {
  console.log(news);
  const { details, title, image_url, author, _id, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image src={image_url} className="w-100"></Image>
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {" "}
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <readonly />
        <Rating
          placeholderRating={rating?.number}
          emptySymbol={<AiOutlineStar />}
          placeholderSymbol={<AiTwotoneStar />}
          fullSymbol={<AiTwotoneStar />}
        />
        <span>{rating?.number}</span>
      </Card.Footer>
    </Card>
  );
}
