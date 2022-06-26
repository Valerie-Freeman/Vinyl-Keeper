import { notifyAdded, notifyExisting } from '../Notifications'
import { postWishlistAlbum } from '../../models/database.server'

export const RemoveFromWishlistButton = ({
  selectedAlbum,
  setAlbumResults,
  albumResults,
}) => {
  const user = JSON.parse(localStorage.getItem('vinyl_user'))

  const handleOnDelete = () => {
    alert('deleted')
  }

  return (
    <button className="btn btn-outline btn-secondary" onClick={handleOnDelete}>
      Delete
    </button>
  )
}
