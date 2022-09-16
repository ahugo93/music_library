import GalleryItem from './GalleryItem'

<<<<<<< HEAD
const Gallery = (props) => {
=======
const Gallery = ({ data }) => {
    const myData = data.result.read()
>>>>>>> with_suspense

    const display = myData.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}
<<<<<<< HEAD
export default Gallery
=======
export default Gallery
>>>>>>> with_suspense
