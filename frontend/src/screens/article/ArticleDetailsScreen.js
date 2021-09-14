import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  listArticleDetails,
  deleteArticle,
} from "../../actions/articleActions";

function ArticleDetailsScreen({ match, history }) {
  const articleId = match.params.id;
  const [isSelf, setIsSelf] = useState(false);
  const dispatch = useDispatch();

  const articleDetails = useSelector((state) => state.articleDetails);
  const { loading, error, article } = articleDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listArticleDetails(articleId));

    if (userInfo) {
      if (userInfo.id === article.author) {
        setIsSelf(true);
      }
    }
  }, [dispatch]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      dispatch(deleteArticle(id));
      history.push(`/articles`);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/articles" className="btn btn-dark mt-5">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Article Details</h1>
        </div>
      </div>
      <hr />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <div className="row">
            <div className="col-md-12">
              <img
                src={article.image}
                alt={article.title}
                className="text-center mb-2"
                width="100%"
              />
              {isSelf ? (
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6 text-center">
                    {" "}
                    <Link to={`/edit-article/${article.id}`}>
                      <button className="btn btn-primary m-2">
                        <i className="fas fa-edit"></i> Update Article
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteHandler(article.id)}
                      className="btn btn-danger m-2"
                    >
                      <i className="fas fa-trash"></i> Delete Article
                    </button>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              ) : null}
              <h1 className="my-3">{article.title}</h1>
              <p>Posted on: {article.created_at}</p>
              <hr />
              <h3 className="mt-3 mb-5">{article.content}</h3>
              <hr />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleDetailsScreen;
