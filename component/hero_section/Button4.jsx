import Span1 from "./Span1";
import Span2 from "./Span2";

function Button4(){
    return(
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <Span1/>
          <Span2/>
        </button>
    )
}

export default Button4;