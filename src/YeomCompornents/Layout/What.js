import React from 'react';
import './What.css'

const What = () => {
    return (
        <div className='what_body'>
            <div>
                <div className="img_box"><img src="img/what_img1.png" alt="what_img1" /></div>
                <div className='what_text'>겨울</div>
            </div>
            <div>
                <div className="img_box"><img src="img/what_img2.png" alt="what_img2" /></div>
                <div className='what_text'>게임</div>
            </div>
            <div>
                <div className="img_box"><img src="img/what_img3.png" alt="what_img3" /></div>
                <div className='what_text'>영화시청</div>
            </div>
            <div>
                <div className="img_box"><img src="img/what_img4.png" alt="what_img4" /></div>
                <div className='what_text'>음악감상</div>
            </div>
        </div>
    );
};

export default What;