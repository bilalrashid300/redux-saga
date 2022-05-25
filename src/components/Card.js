import React from "react";

const Card = ({ user }) => {
        return (
        <div>
            <p className="user">{user.name}</p>
        </div>
    )
}

export default Card;