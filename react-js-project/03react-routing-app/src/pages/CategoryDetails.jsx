import { useParams } from "react-router-dom";

export default function CategoryDetails() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      <h3>Category: {slug}</h3>
      <p>Showing products for {slug}</p>
    </div>
  );
}
