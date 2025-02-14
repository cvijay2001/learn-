const Img_card = ({ cardData }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {
          cardData.map((data, index) => {
            const { title, image, content, footer, button } = data;
            const card_index = index + 1;

            return (
              <div key={index} className="col-md-4 mb-4">
                <div className="card" style={{ width: '18rem' }}>
                  {image && <img src={image} className="card-img-top" alt="Card image cap" />}
                  <div className="card-body">
                    {title && <h5 className="card-title">{`${title} ${card_index}`}</h5>}
                    {content && <p className="card-text">{content}</p>}
                    {button && <a href="#" className="btn btn-primary">{button}</a>}
                  </div>
                  {footer && <div className="card-footer text-muted">{footer}</div>}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Img_card;
