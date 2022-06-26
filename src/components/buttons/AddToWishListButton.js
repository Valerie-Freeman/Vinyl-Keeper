import { notifyAdded, notifyExisting } from '../Notifications'
import { postWishlistAlbum } from '../../models/database.server'
import { useContext } from 'react'
import { UserContex } from '../../userContext'

export const AddToWishListButton = ({
  selectedAlbum,
  setAlbumResults,
  albumResults,
}) => {
  const user = useContext(UserContex)

  const handleOnSave = (e) => {
    e.preventDefault() // Prevent onClick from navigating to Album detail page

    const albumToSave = {
      master_id: selectedAlbum.master_id,
      cover_image: selectedAlbum.cover_image,
      genre: selectedAlbum.genre[0],
      title: selectedAlbum.title.split(' - ')[1],
      artist: selectedAlbum.title.split(' - ')[0],
      year: selectedAlbum.year,
      userId: user.id,
    }

    postWishlistAlbum(albumToSave)
      .then((res) => {
        setAlbumResults(
          albumResults.filter((album) => selectedAlbum.id !== album.id)
        )
        notifyAdded('wishlist')
      })
      .catch((e) => {
        notifyExisting()
      })
  }

  return (
    <button className="btn btn-outline btn-primary" onClick={handleOnSave}>
      Add to Wishlist
    </button>
  )
}
