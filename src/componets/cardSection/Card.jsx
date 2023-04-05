import React from 'react';

const Card = ({url,title}) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 p-4'>
<div className="card w-100 flex-column  aligin-item-center justify-item-center text-center p-2">
<img className='w-80 mx-auto' src={url} alt="" />
            <h5>{title}</h5>
</div>
        </div>
    );
}

export default Card;
