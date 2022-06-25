import { Route, Routes } from 'react-router-dom'
import { AlbumSearch } from '../AlbumSearch'
import { Library } from '../Library'
import { Wishlist } from '../Wishlist'

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/albumSearch/library" element={<AlbumSearch />} />
      <Route path="/albumSearch/wishlist" element={<AlbumSearch />} />
    </Routes>
  )
}
