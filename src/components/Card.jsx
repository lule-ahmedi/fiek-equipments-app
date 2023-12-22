import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h3 className="name">{props.name}</h3>
                {/* <img className="circle-img" src={props.img} alt=""/> */}
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
                <Detail detailInfo={props.dsc} />
                <Detail detailInfo={"Quantity: " + props.qty} />
            </div>
        </div>
    );
}

export default Card;