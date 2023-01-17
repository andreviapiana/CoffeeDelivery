import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Delivery } from './pages/Delivery'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
