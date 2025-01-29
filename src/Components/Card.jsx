import React from 'react';

const Card = ({ data }) => {
    const truncateText = (text, maxLength) => {
        if (!text) return "No description available."; // Handle empty description
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };
    return (
        <div className="card h-100" style={{ width: "21rem" }}>
            <img
                src={data.urlToImage || "https://placehold.co/200x150"}
                className="card-img-top"
                alt={data.title || "News image"}
                style={{ width: "100%", height: "188px" }}
            />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                {/* <p className="card-text">{truncateText(data.description, 100)}</p> */}
            </div>
            <div className="card-footer">
                <a href={data.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Card;
