import { cates } from "./Categories";

export default function CategoryList() {
  return (
    <div>
      <h3>All Categories</h3>
      <ul>
        {cates.map((cate) => (
          <li>
            {cate}
          </li>
        ))}
        
      </ul>
    </div>
  );
}
