import React, { Component } from "react"
import Head from "next/head"

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

class IndexPage extends Component {
  state = {
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: "",
    loading: "is-loading"
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  handleOpenArticle = article => {
    this.setState({
      isArticleVisible: true,
      article
    })

    setTimeout(() => this.setState({ timeout: true }), 325)
    setTimeout(() => this.setState({ articleTimeout: true }), 350)
  }

  handleCloseArticle = () => {
    this.setState({ articleTimeout: false })

    setTimeout(() => this.setState({ timeout: false }), 325)
    setTimeout(() => {
      this.setState({
        isArticleVisible: false,
        article: ""
      })
    }, 350)
  }

  render() {
    const { loading, isArticleVisible, timeout, articleTimeout, article } = this.state

    return (
      <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
        <Head>
          <title>Juan Carlos Peguero | Senior Full-Stack Engineer</title>

          {/* Google Font */}
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
        </Head>

        <div id="wrapper">
          <Header onOpenArticle={this.handleOpenArticle} timeout={timeout} />

          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onOpenArticle={this.handleOpenArticle}
            onCloseArticle={this.handleCloseArticle}
          />

          <Footer timeout={timeout} />
        </div>

        <div id="bg" />
      </div>
    )
  }
}

export default IndexPage