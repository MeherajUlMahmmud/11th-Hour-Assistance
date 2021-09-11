import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateArticle,
  listArticleDetails,
} from "../../actions/articleActions";
import { ARTICLE_UPDATE_RESET } from "../../constants/articleConstants";

function ArticlePostScreen({ match, history }) {
  const articleId = match.params.id;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const articleDetails = useSelector((state) => state.articleDetails);
  const { error, loading, article } = articleDetails;

  const articleUpdate = useSelector((state) => state.articleUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = articleUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ARTICLE_UPDATE_RESET });
      history.push("/articles");
    } else {
      if (!article.title || article.id !== Number(articleId)) {
        dispatch(listArticleDetails(articleId));
      } else {
        setTitle(article.title);
        setContent(article.content);
        setImage(article.image);
      }
    }
  }, [dispatch, article, articleId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateArticle({ id: articleId, title, image, content }));

    // history.push("/articles");
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("id", articleId);

    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/api/articles/upload/",
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Post Article</h2>
            <ol>
              <li>
                <Link to={"/articles"}>Article Home</Link>
              </li>
              <li>Post Article</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page ">
        <div className="container">
          <div className="container col-md-8">
            <div className="content-section">
              <div className="form">
                <div className="my-5"></div>
                <form onSubmit={submitHandler}>
                  <h2 className="m-5 text-center">Post Article</h2>
                  <div className="form-group m-3">
                    <input
                      name="name"
                      className="form-control"
                      type="name"
                      placeholder="Article Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <div className="form-group m-3">
                      <input
                        type="text"
                        placeholder="Enter image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="form-control"
                        required
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group m-3">
                    <input
                      type="file"
                      className="form-control"
                      onChange={uploadFileHandler}
                    ></input>
                    {uploading && <Loader />}
                  </div>
                  <div className="form-group m-3">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Article Content"
                      rows="5"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary m-5" type="submit">
                      Post Article
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ArticlePostScreen;
