import "./style/Pricing.scss";
import "./style/Text.scss";

function Pricing() {
  return (
    <div className="pricing-section" id="pricing">
      <h1 className="section-title">Oferta</h1>
      <div className="price-options">
        <div className="option">
          <div className="option-title">One day trip</div>
          <div className="option-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam
            nobis fuga, libero voluptas repudiandae placeat neque dolore vel
            eligendi pariatur facere assumenda optio! Minus laudantium
            exercitationem natus aliquid ea, quasi perspiciatis alias, maiores
            aliquam possimus sit, excepturi necessitatibus doloremque.
          </div>
          <div className="price">price to negotiate</div>
        </div>
        <div className="option">
          <div className="option-title">Weekend trip</div>
          <div className="option-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam
            nobis fuga, libero voluptas repudiandae placeat neque dolore vel
            eligendi pariatur facere assumenda optio! Minus laudantium
            exercitationem natus aliquid ea, quasi perspiciatis alias, maiores
            aliquam possimus sit, excepturi necessitatibus doloremque.
          </div>
          <div className="price">price to negotiate</div>
        </div>
        <div className="option">
          <div className="option-title">One week and longer</div>
          <div className="option-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam
            nobis fuga, libero voluptas repudiandae placeat neque dolore vel
            eligendi pariatur facere assumenda optio! Minus laudantium
            exercitationem natus aliquid ea, quasi perspiciatis alias, maiores
            aliquam possimus sit, excepturi necessitatibus doloremque.
          </div>
          <div className="price">price to negotiate</div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
