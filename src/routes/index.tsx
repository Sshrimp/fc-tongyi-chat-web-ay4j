import { lazy } from 'react';
// import HomeLayout from '../layouts/HomeLayout';
// import NotFound from '../layouts/NotFound';
import { Navigate } from 'react-router-dom';
// import { Shell } from '../components/shell';

// const SuspenseComponent = ( Component ) => ( props ) => {
//   return (
//     <Suspense fallback={null}>
//       <Component {...props}></Component>
//     </Suspense>
//   )
// }

// const Shell = lazy(() => import("../components/shell"));
const HomeLPage = lazy(() => import("../components/HomePage"));
const HostPage = lazy(() => import("../components/HostPage"));
// const ShopListComponent = lazy(() => import("../pages/shopping"));
// const WashComponent = lazy(() => import("../pages/wash"));
// const MyComponent = lazy(() => import("../pages/my"));
// const ShopComponent = lazy(() => import("../pages/shop"));
// const SearchComponent = lazy(() => import("../pages/search"))
// const KindComponent = lazy(() => import("../pages/kind"))

export default [
  {
    path: "/homepage",
    element: <HomeLPage />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Navigate to="/shop" />
    //   },

    //   {
    //     path: "*",
    //     element: <NotFound />
    //   }
    // ]
  },
  {
    path: "/hostPage",
    element: <HostPage />,
  },
  {
    path: "/",
    element: <Navigate to="/homepage"/>,
  }
];
