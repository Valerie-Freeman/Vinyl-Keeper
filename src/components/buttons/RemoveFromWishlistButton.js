import { notifyAdded, notifyExisting } from '../Notifications'
import {
  deleteWishlistItem,
  getUserWishlist,
  postWishlistAlbum,
} from '../../models/database.server'
import { useContext } from 'react'
import { UserContex } from '../../userContext'

export const RemoveFromWishlistButton = ({
  selectedAlbum,
  setAlbumResults,
}) => {
  const user = useContext(UserContex)

  const handleOnDelete = (e) => {
    e.preventDefault() // Prevent onClick from navigating to Album detail page
    deleteWishlistItem(selectedAlbum.id).then(() => {
      getUserWishlist(user.id).then((res) => setAlbumResults(res.data))
    })
  }

  return (
    <button className="btn btn-outline btn-secondary" onClick={handleOnDelete}>
      Delete
    </button>
  )
}
