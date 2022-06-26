import { notifyAdded, notifyExisting } from '../Notifications'
import {
  postLibraryAlbum,
  deleteWishlistItem,
  getUserWishlist,
} from '../../models/database.server'
import { useContext } from 'react'
import { UserContex } from '../../userContext'

export const WishlistToLibraryButton = ({
  selectedAlbum,
  setAlbumResults,
  albumResults,
}) => {
  const user = useContext(UserContex)

  const handleOnSave = (e) => {
    e.preventDefault() // Prevent onClick from navigating to Album detail page

    // Make a new album object with out id on it
    const albumToSave = {
      master_id: selectedAlbum.master_id,
      cover_image: selectedAlbum.cover_image,
      genre: selectedAlbum.genre,
      title: selectedAlbum.title,
      artist: selectedAlbum.artist,
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
