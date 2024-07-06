import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../components/ListCard"; // Adjust the path as necessary
import { blogcontents } from "../constant/index"; // Adjust the path as necessary

const FeaturedBlogs = () => {
  // Select the first three blogs
  const featuredBlogs = blogcontents.slice(0, 3);

  return (
    <div className="grid lg:grid-cols-3 gap-4 mx-5 lg:mx-20 mt-20">
      {featuredBlogs.map((contents) => (
        <Link to={`/blog/${contents.id}`} key={contents.id}>
          <ListCard
            id={contents.id}
            image={contents.image}
            heading={contents.heading}
            description={contents.description}
            timeframe={contents.timeframe}
            writer={contents.writer}
          />
        </Link>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
