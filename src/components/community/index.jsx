import Banner from "../banner";
import Item from "../items";
import './styles.scss'

const Community = () =>{
    return (
        <div className="community">
            <Banner/>
            <div className="item-div">
                <div className="items">
                    <Item image={"/post_image_1.jpg"}/>
                    <Item/>
                    <Item image={"/post_image_2.jpg"}/>
                    <Item/>
                    <Item/>
                </div>
                <p className="app-name">CYBERGRAM</p>
            </div>
        </div>
    )
}

export default Community;