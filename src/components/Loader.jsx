// src/components/Loading.js
import React from 'react';
import sponge from '../assets/sponge.png'
const Loader = () => {
    return (
        <div className="loading-overlay">
            <div
                className={`spinner-container justify-center items-center place-items-center grid`}
            >
                <div className="spinner ">
                    <svg viewBox="0 0 100 100">
                        <path
                            id="circlePath"
                            d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                            fill="transparent"
                        />
                        <text>
                            <textPath xlinkHref="#circlePath" startOffset="0%">
                                digital • sponge • digital • sponge • digital • sponge •
                            </textPath>
                        </text>
                    </svg>
                    <div className="sponge-image">
                        <img src={sponge} alt="Sponge" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
