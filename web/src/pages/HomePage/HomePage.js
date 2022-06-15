import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header>
        <h1>RW Blog</h1>
        <nav><ul>
          <li><Link to={routes.home()}>Home</Link></li>
          <li><Link to={routes.about()}>About</Link></li>
        </ul></nav>
      </header>

      <main>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </main>
    </>
  )
}

export default HomePage
