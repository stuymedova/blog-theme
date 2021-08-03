import Link from 'next/link';
import { useHistoryContext } from '../hooks/useRouteHistory';
import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';

export default function Navigation({ isPostsPage, categories, post }) {
  const { prevPath, removeHistory } = useHistoryContext();
  const backToCategory = post?.category?.find(category => `/${category.slug.current}` === prevPath);

  return (
    <nav role='navigation'>
      {isPostsPage
        ? <ul>
            <li>
              <FiChevronDown />
              <Link href='/'><a>All</a></Link>
            </li>
            {categories.map((category) => (
              <li key={category._id}>
                <Link href={`/${category.slug}`}>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        : <ul>
            <li>
              <FiChevronLeft />
              {backToCategory
                ? <Link href={prevPath}>
                    <a onClick={removeHistory}>{backToCategory.title}</a>
                  </Link>
                : <Link href='/'>
                    <a onClick={removeHistory}>All</a>
                  </Link>
              }
            </li>
          </ul>
      }
    </nav>
  )
}
