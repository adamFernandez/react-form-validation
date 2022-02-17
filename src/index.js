import  { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import { MenuBar, Products, Listing, Movies } from './imports/components';

render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} >
  //       <Route path="/" element={<MenuBar />} >
  //           <Route path="products" element={<Products />} />
  //           <Route path="listing" element={<Listing />} />
  //           <Route path="movies" element={<Movies />} />
  //         </Route>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
  <App />,
  document.getElementById('root')
);
