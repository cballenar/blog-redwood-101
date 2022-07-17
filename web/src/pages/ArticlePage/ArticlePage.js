import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.js</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
        <Link to={routes.article({ id: id })}>Article</Link>`
      </p>
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
