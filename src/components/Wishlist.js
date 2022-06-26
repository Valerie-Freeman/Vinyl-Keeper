import { useContext, useEffect, useState } from 'react'
import { getUserWishlist } from '../models/database.server'
import { Toaster } from 'react-hot-toast'
import { AddAlbumCard } from './cards/AddAlbumCard'
import { WishlistAlbumCard } from './cards/WishlistAlbumCard'
import { UserContex } from '../userContext'

export const Wishlist = () => {
  const [userAlbums, setUserAlbums] = useState([])
  const user = useContext(UserContex)

  useEffect(() => {
    if (user.id) {
      getUserWishlist(user.id).then((res) => setUserAlbums(res.data))
    }
  }, [user])

  return (
    <>
      <Toaster />
      <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-2 gap-8 m-4">
        <AddAlbumCard />
        {userAlbums.map((album) => (
          <WishlistAlbumCard
            key={album.id}
            album={album}
            albumResults={userAlbums}
            setAlbumResults={setUserAlbums}
          />
        ))}
      </div>
    </>
  )
}
