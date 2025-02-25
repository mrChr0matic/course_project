import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommunity } from "../../api/api";
import Banner from "../banner";
import Item from "../items";
import './styles.scss'

const Community = (props) =>{
    const [currComm,setCurrComm]=  useState({});
    const  commId  = props.name;

    useEffect(() => {
        const fetchCommunity = async () => {
            try {
                const communityDetails = await getCommunity(commId);
                setCurrComm(communityDetails[0]);
                console.log(communityDetails[0])
            } catch (err) {
                console.error(`Error fetching ${commId}:`, err);
            }
        };
        fetchCommunity();
    }, [commId]);  
    

    return (
        <div className="community">
            <Banner banner={currComm ? currComm.banner :""}
             icon={ currComm ? currComm.icon : ""}
              title={currComm ? currComm.name : ""}
              post={props.post} setPost={props.setPost}
              />
              
            <div className="item-div">
            <div className="items">
                {currComm.posts?.map((post) => (
                    <Item 
                        key={post.id} 
                        title={post.title} 
                        image={post.image} 
                        content={post.content} 
                        upvotes={post.upvotes} 
                        downvotes={post.downvotes} 
                        author={post.author.username}
                        community={currComm.name}
                        />
                    ))}
                </div>
                <p className="app-name">CYBERGRAM</p>
            </div>
        </div>
    )
}

export default Community;