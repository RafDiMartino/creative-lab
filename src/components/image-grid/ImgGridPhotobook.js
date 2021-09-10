import "./image-grid.css"
import React, {useState} from 'react'
import useFirestore from "../custom-hook/useFirestore"
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';


const ImgGridPhotobook = ({ setSelectedImg })=> {
    const [gridToList, setGridToList] = useState(true)

    const handleClick = () => {
        setGridToList(!gridToList)
    }


    const { docs } = useFirestore("servizio-fotografico")
    
    return (
        <div>
            <div className="image-gid-container" onClick={handleClick}>
                {gridToList ? <AppsIcon  style={{fontSize: 33}} /> : <ListIcon  style={{fontSize: 33}} />}                
                
            </div> 
            <div className={gridToList ? "img-grid" : "img-list"}>
                {docs && docs.map(item => (
                    <img onClick={() => setSelectedImg(item.url)} src={item.url} alt="" key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default ImgGridPhotobook