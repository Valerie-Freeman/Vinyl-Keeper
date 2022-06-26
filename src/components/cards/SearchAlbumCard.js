import { AddToLibraryButton } from '../buttons/AddToLibraryButton'
import { AddToWishListButton } from '../buttons/AddToWishListButton'

export const SearchAlbumCard = ({ album, albumResults, setAlbumResults }) => {
  return (
    <div className="card w-96 bg-base-content shadow-xl card-compact shadow-gray-700">
      <figure>
        <img src={album.cover_image} alt={album.title} className="rounded-sm" />
      </figure>
      <div className="card-body items-center text-base-100 text-center">
        <h2 className="card-title font-bold">
          {album?.title?.split(' - ')[1]}
        </h2>
        <h3 className="font-semibold">{album?.title?.split(' - ')[0]}</h3>
        <p>{album.year}</p>

        <div className="card-actions">
          <AddToLibraryButton
            selectedAlbum={album}
            albumResults={albumResults}
            setAlbumResults={setAlbumResults}
          />
          <AddToWishListButton
            selectedAlbum={album}
            albumResults={albumResults}
            setAlbumResults={setAlbumResults}
          />
        </div>
      </div>
    </div>
  )
}
