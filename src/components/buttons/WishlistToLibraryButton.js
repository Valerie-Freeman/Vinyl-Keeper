import { notifyAdded, notifyExisting } from '../Notifications'
import { postLibraryAlbum } from '../../models/database.server'

export const WishlistToLibraryButton = ({
  selectedAlbum,
  setAlbumResults,
  albumResults,
}) => {
  const user = JSON.parse(localStorage.getItem('vinyl_user'))

  const handleOnSave = () => {
    // post selectedAlbum to Library
    // notify it's been added, delete item from wishlist by selectedAlbum.id, get user wishlist again
    // or
    // notfity it already exist, ask if user wants to delete
    // delete get user wishlist again
    // dismiss
  }

  return (
    <button className="btn btn-outline btn-accent" onClick={handleOnSave}>
      Got it!
    </button>
  )
}
