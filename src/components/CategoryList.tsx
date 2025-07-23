import React from "react";
import "./CategoryList.css";

interface CategoryListProps {
  category: string;
  items: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({ category, items }) => (
  <div className="category-list">
    <h2>{category}</h2>
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default CategoryList;
