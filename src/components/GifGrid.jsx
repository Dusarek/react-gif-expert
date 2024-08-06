import { GifItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images,isLoading} = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && (<h1>Loading...</h1>)
      }
      <div className="card-grid">
        {
          images.map((image) =>(
            <GifItem key={image.id} {...image}/>
          ))
        }
      </div>
    </>
    
  )
}
