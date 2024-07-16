import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./UI/AppLayout";
import MyAccount from "./page/MyAccount";
import Settings from "./page/Settings";
import Bookings from "./page/Bookings";
import MyReviews from "./page/MyReviews";
import Login from "./page/Login";
import Tours from "./page/Tours";
import Tour from "./features/Tour/Tour";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserProvider from "./context/UserContext";

// import Main from "./UI/BodyOverview/Main";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <UserProvider>
                <AppLayout />
              </UserProvider>
            }
          >
            {/* <Route index element={<Navigate replace to="/" />} /> */}
            <Route path="/" element={<Tours />} />
            <Route path="login" element={<Login />} />
            <Route path="tour/:id" element={<Tour />} />
            <Route path="myAccount" element={<MyAccount />}>
              <Route index element={<Navigate replace to="settings" />} />
              <Route path="settings" element={<Settings />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="reviews" element={<MyReviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
