import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.js</code>
      </p>
    </>
  )
}

export default ArticlePage
