//card for a project
export default function Card ({
  title,
  imageUrl
}: {
  title: string
  imageUrl: string
}) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={imageUrl} alt="cover"/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  )
}