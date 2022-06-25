import { notifyAdded, notifyExisting } from '../Notifications'
import { postLibraryAlbum } from '../../models/database.server'

export const AddToLibraryButton = ({
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

    postLibraryAlbum(albumToSave)
      .then((res) => {
        setAlbumResults(
          albumResults.filter((album) => selectedAlbum.id !== album.id)
        )
        notifyAdded('library')
      })
      .catch((e) => {
        notifyExisting()
      })
  }

  return (
    <button className="btn btn-outline btn-accent" onClick={handleOnSave}>
      Add to Library
    </button>
  )
}
