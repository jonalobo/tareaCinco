import '../css/Item.css'
const Item = ({title,description,thumbnail,price}) => {
  return (
    <>
    <div class="card w-96 bg-base-100 shadow-xl separacion">
        <figure class="px-10 pt-10">
            <img src={thumbnail} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{title}</h2>
            <p>{description}</p>
            <h1 className='precio'>{price}$</h1>
            <div class="card-actions">
            
            <button class="btn btn-primary">Ver detalle</button>
            </div>
        </div>
    </div>
    </>
  )
}
export default Item