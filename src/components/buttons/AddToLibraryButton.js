// import { notifyAdded, notifyExisting } from '../Notifications'
import { postLibraryAlbum } from '../../models/database.server'
import { useContext } from 'react'
import { UserContex } from '../../userContext'
import { toast } from 'react-toastify'

export const AddToLibraryButton = ({
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

    postLibraryAlbum(albumToSave)
      .then((res) => {
        setAlbumResults(
          albumResults.filter((album) => selectedAlbum.id !== album.id)
        )
        toast('Added to Library!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .catch((e) => {
        toast.error('Album already in Library', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }

  return (
    <button className="btn btn-outline btn-accent" onClick={handleOnSave}>
      Add to Library
    </button>
  )
}
