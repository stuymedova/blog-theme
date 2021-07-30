import Link from 'next/link';
import { useHistoryContext } from '../hooks/useRouteHistory';

export default function Navigation({ isPostsPage, category, post }) {
  const { prevPath, removeHistory } = useHistoryContext();
  const backToCategory = post?.category?.find(category => `/${category.slug.current}` === prevPath);

  return (
    <nav role='navigation'>
      {isPostsPage
        ? <ul>
            <li>
              <Link href='/'><a>All</a></Link>
            </li>
            {category.map((category) => (
              <li key={category._id}>
                <Link href={`/${category.slug}`}>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        : <ul>
            <li>
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
  );
};
