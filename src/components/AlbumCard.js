import { useLocation, useNavigate } from 'react-router-dom'

export const AlbumCard = ({ album, albumResults, setAlbumResults, button }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  let Button = button

  const navigateToAlbumDetails = () => {
    navigate(`/album/${album.master_id}`)
  }

  return (
    <div
      className={`card w-96 bg-base-content shadow-xl card-compact shadow-black ${
        pathname === '/' ? 'hover:shadow-primary cursor-pointer' : ''
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
      <div className="card-body items-center text-base-100 text-center">
        <h2 className="card-title font-bold">
          {album?.title?.split(' - ')[1]}
        </h2>
        <h3 className="font-semibold">{album?.title?.split(' - ')[0]}</h3>
        <p>{album.year}</p>
        {button ? (
          <div className="card-actions">
            <Button
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
