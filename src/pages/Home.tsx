import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import { Link } from 'react-router-dom';
import { useProductsQuery } from '../services/ProductsApi';

function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error, isLoading, isFetching, isSuccess }: any =
    useProductsQuery();

  return (
    <div>
      Hello World
      {isLoading && <h1>Loading</h1>}
      {isFetching && <h1>Fetching</h1>}
      {error && <h1>Error</h1>}
      {isSuccess && (
        <div>
          {data.products.map(
            (product: {
              id: Key | null | undefined;
              title:
                | string
                | number
                | boolean
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <div key={product.id}>
                  <p>{product.title}</p>
                </div>
              );
            }
          )}
        </div>
      )}
      <Link to="/">Go Root</Link>
    </div>
  );
}

export default Home;
