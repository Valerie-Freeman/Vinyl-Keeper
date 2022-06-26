import { notifyAdded, notifyExisting } from '../Notifications'
import { postWishlistAlbum } from '../../models/database.server'

export const AddToWishListButton = ({
  selectedAlbum,
  setAlbumResults,
  albumResults,
}) => {
  const user = JSON.parse(localStorage.getItem('vinyl_user'))

  const handleOnSave = () => {
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
