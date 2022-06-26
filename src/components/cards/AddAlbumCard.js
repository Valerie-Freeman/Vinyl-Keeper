import { Link } from 'react-router-dom'

export const AddAlbumCard = () => {
  return (
    <Link
      to={`/albumSearch`}
      className="image-full card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1"
    >
      <figure>
        <img
          src="https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png?ssl=1"
          alt="album cover"
        />
      </figure>
      <div className="card-body items-center flex-col justify-center">
        <h2 className="card-title font-bold">Add Album</h2>
      </div>
    </Link>
  )
}
