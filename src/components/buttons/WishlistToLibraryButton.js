import { notifyAdded, notifyExisting } from '../Notifications'
import {
  postLibraryAlbum,
  deleteWishlistItem,
  getUserWishlist,
} from '../../models/database.server'

export const WishlistToLibraryButton = ({
  selectedAlbum,
  setAlbumResults,
  albumResults,
}) => {
  const user = JSON.parse(localStorage.getItem('vinyl_user'))

  const handleOnSave = () => {
    // Make a new album object with out id on it
    const albumToSave = {
      master_id: selectedAlbum.master_id,
      cover_image: selectedAlbum.cover_image,
      genre: selectedAlbum.genre[0],
      title: selectedAlbum.title.split(' - ')[1],
      artist: selectedAlbum.title.split(' - ')[0],
      year: selectedAlbum.year,
      userId: user.id,
    }
    // post selectedAlbum to Library
    postLibraryAlbum(albumToSave)
      .then((res) => {
        // notify it's been added
        notifyAdded('library')
        //delete item from wishlist by selectedAlbum.id
        deleteWishlistItem(selectedAlbum.id).then(() => {
          //get user wishlist again
          getUserWishlist(user.id).then((res) => setAlbumResults(res.data))
        })
      })
      .catch((e) => {
        // notfity it already exist, ask if user wants to delete
        // delete get user wishlist again
        // dismiss
        notifyExisting()
      })
  }

  return (
    <button className="btn btn-outline btn-accent" onClick={handleOnSave}>
      Got it!
    </button>
  )
}
