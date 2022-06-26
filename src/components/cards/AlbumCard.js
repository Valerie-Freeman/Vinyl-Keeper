import { useLocation, useNavigate } from 'react-router-dom'

export const AlbumCard = ({
  album,
  albumResults,
  setAlbumResults,
  buttons,
}) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [ButtonOne, ButtonTwo] = buttons ? buttons : []
  const libraryClasses =
    'card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1'
  const searchAndWishlistClasses =
    'card w-96 bg-base-content shadow-xl card-compact shadow-gray-700'

  const navigateToAlbumDetails = () => {
    navigate(`/album/${album.master_id}`)
  }

  // class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1"

  // card w-96 bg-base-content shadow-xl card-compact shadow-gray-700

  return (
    <div
      className={`${
        pathname === '/' ? libraryClasses : searchAndWishlistClasses
      }`}
      onClick={() => {
        if (pathname === '/') {
          navigateToAlbumDetails()
        }
      }}
    >
      <figure>
        <img src={album.cover_image} alt={album.title} className="rounded-sm" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">
          {album?.title?.split(' - ')[1]}
        </h2>
        <h3 className="font-semibold">{album?.title?.split(' - ')[0]}</h3>
        <p>{album.year}</p>
        {buttons ? (
          <div className="card-actions">
            <ButtonOne
              selectedAlbum={album}
              albumResults={albumResults}
              setAlbumResults={setAlbumResults}
            />
            <ButtonTwo
              selectedAlbum={album}
              albumResults={albumResults}
              setAlbumResults={setAlbumResults}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
