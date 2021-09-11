import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ArticleCard from "../../components/ArticleCard";
import {
  listArticles,
  deleteArticle,
  createArticle,
} from "../../actions/articleActions";
import { useDispatch, useSelector } from "react-redux";
import { ARTICLE_CREATE_RESET } from "../../constants/articleConstants";

function ArticleHomeScreen({ history, match }) {
  const dispatch = useDispatch();

  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articleList;

  const articleDelete = useSelector((state) => state.articleDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = articleDelete;

  const articleCreate = useSelector((state) => state.articleCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    article: createdArticle,
  } = articleCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: ARTICLE_CREATE_RESET });

    if (successCreate) {
      history.push(`/edit-article/${createdArticle.id}`);
    } else {
      dispatch(listArticles());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createArticle,
  ]);

  const createArticleHandler = () => {
    dispatch(createArticle());
  };

  return (
    <div>
      <section id="features" className="padd-section mt-4">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h3>Articles</h3>
          </div>
          {userInfo ? (
            <div className="row mb-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <Link to="/create-article">
                  <button
                    className="btn btn-primary"
                  >
                    <i className="fas fa-plus"></i> Write New Article
                  </button>
                </Link>
              </div>
            </div>
          ) : null}
          {loadingDelete && <Loader />}
          {errorDelete && <Message variant="danger">{errorDelete}</Message>}
          {loadingCreate && <Loader />}
          {errorCreate && <Message variant="danger">{errorCreate}</Message>}
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            {articles.map((article) => (
              <div className="col-lg-12">
                <div className="feature-block border">
                  <ArticleCard article={article} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleHomeScreen;
