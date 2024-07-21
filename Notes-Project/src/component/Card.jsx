import React from 'react';

const Card = ({ title,card_index, image, children, footer }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && <img src={image} className="card-img-top" alt="Card image cap" />}
      <div className="card-body">
        {title && <h5 className="card-title">{title + card_index}</h5>}
        {children}
      </div>
      {footer && <div className="card-footer text-muted">{footer}</div>}
    </div>
  );
};

export default Card;
