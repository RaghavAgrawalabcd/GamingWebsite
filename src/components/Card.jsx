import React from 'react';

function Card({cimg,ctitle,cabout,clink,chrs}) {
    return (
        <>
            <div className="cards">
                <a href={clink} target="_blank">
                     <div className="card">
                        <img src={cimg} alt="Image" className="card_img" />
                        <div className="card_info">
                            <span className="small_bar1">.</span>
                            <span className="card_news"> News</span>
                            <span className="small_bar2">.</span>
                            <span className="card_title"> {ctitle} </span>
                            <div className="card_about">{cabout}</div>
                            <div>{ chrs}</div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
export default Card;