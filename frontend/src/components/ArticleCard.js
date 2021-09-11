import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className="row">
      <div className="col-lg-5">
        <div className="text-center">
          <img
            src={article.image}
            alt={article.title}
            style={{ width: "80%", height: "40%" }}
          />
        </div>
      </div>
      <div className="col-lg-7">
        <h3 style={{ fontWeight: "bold" }}>{article.title}</h3>
        <hr />
        {/* show first 300 characters of article content */}
        <p style={{ color: "black", fontWeight: "bold" }}>
          {article.content.substring(0, 300)}
        </p>
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <Link to={`/article/${article.id}`}>
              <p className="btn btn-primary">
                Read More <i className="fas fa-arrow-right"></i>
              </p>
            </Link>
          </div>
        </div>
        <p style={{ color: "gray" }}>Posted: {article.created_at}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
