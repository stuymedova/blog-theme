import Link from 'next/link';

export default function Navigation({ isPostsPage, category }) {
  return (
    <nav id='nav-main' role='navigation'>
      <li>
        {isPostsPage
          ? <>
              {category.map((category) => (
                <ul>
                  <Link as={`/${category.slug}`} href='/[category]'>
                    <a>{category.title}</a>
                  </Link>
                </ul>
              ))}
            </>
          : <ul><a href=''>Back</a></ul>
        }
      </li>
    </nav>
  )
}