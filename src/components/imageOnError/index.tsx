import React from 'react';

import image from '../../assets/images/noimg.png';

export interface IProps {
  uri: string
}

const Image: React.FC<IProps> = (props) => {

    const addDefaultSrc = (ev: any) => {
        ev.target.src = image;
    };

    return (
      <>
        <img
        onError={addDefaultSrc}
        className='list-img'
        src={props.uri}
        alt="img"
        />
      </>
    )
}

export default Image