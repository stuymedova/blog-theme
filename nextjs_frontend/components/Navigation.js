import Link from 'next/link';

export default function Navigation({ isPostsPage, category }) {
  return (
    <nav role='navigation'>
      <li>
        {isPostsPage
          ? <ul>
              <li><Link href='/'><a>All</a></Link></li>
              {category.map((category) => (
                <li key={category._id}>
                  <Link as={`/${category.slug}`} href='/[category]'>
                    <a>{category.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          : <ul><li>
              <Link href='/'>
                <a>Back</a>
              </Link>
            </li></ul>
        }
      </li>
    </nav>
  )
}
