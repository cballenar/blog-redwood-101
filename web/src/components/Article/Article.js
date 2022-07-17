import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <footer>
        <p>{'Find me in ./web/src/components/Article/Article.js'}</p>
        Posted at: <time>{article.createdAt}</time>
      </footer>
    </article>
  )
}

export default Article
