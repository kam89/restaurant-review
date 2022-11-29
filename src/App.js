import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import { HomePage } from './home';

import './App.css';
import { Restaurant } from './restaurant';
import { MyReview } from './myReview';
import { RestaurantDetail } from './restaurant/restaurantDetail';

function App() {

  // const routes = [
  //   {
  //     path: "/",
  //     exact: true,
  //     sidebar: () => <div>Home</div>,
  //     main: () => <HomePage />
  //   },
  //   {
  //     path: "/restaurant",
  //     sidebar: () => <div>Restaurant</div>,
  //     main: () => { }
  //   },
  //   {
  //     path: "/my-reviews",
  //     sidebar: () => <div>My Reviews</div>,
  //     main: () => { }
  //   },
  // ];

  // const SideBarItem = () => {
  //   return (
  //     <div style={{
  //       backgroundColor: '#ffffff',
  //       border: '1px solid'
  //     }}>

  //     </div>
  //   );
  // };


  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <div style={{
          width: 200,
          height: '160vh',
          boxShadow: '1px 0px lightgrey',
        }}>
          <div>
            <NavLink to="/">Home</NavLink>
            <div className="divider" />
            <NavLink to="/restaurant">Restaurants</NavLink>
            <div className="divider" />
            <NavLink to="/my-reviews">My Reviews</NavLink>
          </div>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/my-reviews" element={<MyReview />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          </Routes>
        </div>
      </div>


    </BrowserRouter >
  );
}

export default App;
