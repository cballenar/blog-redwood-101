import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>RW Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default BlogLayout
