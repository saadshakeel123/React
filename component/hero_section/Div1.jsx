import Div2 from "./Div2";
import Div3 from './Div3'
import Button4 from './Button4'
import Button5 from "./Button5";

function Div1() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <Div2/>
          <Div3/>
          <Button4/>
          <Button5/>
        </div>
    )
}

export default Div1;