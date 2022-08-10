import React from "react";
import './Video.scss'

export default function Video(){

    return(
        <div className='VideoWrapper'>
            <h1 className='text1'>Here is Video Page</h1>
            <div className='VideoBlock'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uR6ofCBBRcE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <hr/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NKr4xlU9Ynw"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
            </div>
        </div>
    )
}