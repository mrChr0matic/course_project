import Item from "../items";
import './styles.scss'

const MainBody = () =>{
    return (
        <div className="main-body">
            <Item/>
            <Item image={'/post_image.jpg'}/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}

export default MainBody;