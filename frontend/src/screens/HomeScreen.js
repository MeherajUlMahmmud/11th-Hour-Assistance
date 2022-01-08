import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { listArticles } from "../actions/articleActions";
import { useDispatch, useSelector } from "react-redux";

function HomeScreen() {
    const dispatch = useDispatch();

    const articleList = useSelector((state) => state.articleList);
    const { loading, error, articles } = articleList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(listArticles());
    }, [dispatch]);

    return (
        <div>
            <section id="hero" className="wow fadeIn">
                <div className="hero-container">
                    <h1>Welcome to 11th Hour Assistance </h1>
                    <h2>Cloud based Emergency Service</h2>
                    <img
                        src={process.env.PUBLIC_URL + "assets/img/hero-img.png"}
                        alt="Hero Imgs"
                    />
                    {userInfo ? null : (
                        <Link className="btn-get-started" to={"/register"}>
                            Get Started
                        </Link>
                    )}
                </div>
            </section>
            <section className="article-section mb-5">
                <div className="container">
                    <h3>Recent Articles</h3>
                    <hr />
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
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
            <section className="article-section mb-5">
                <div className="container">
                    <h3>Recent Blood Requests</h3>
                    <hr />
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
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
            <section className="article-section mb-5">
                <div className="container">
                    <h3>Recent Equipment Requests</h3>
                    <hr />
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
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

export default HomeScreen;
