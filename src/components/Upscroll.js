import React,{Component} from 'react'
import { animateScroll as scroll } from "react-scroll";
import Aos from 'aos';
import "aos/dist/aos.css";



 class  Upscroll extends Component {
     constructor(props){
         super(props);

         this.scrollRef = React.createRef();
     }
     
        scrollToTop = () => {
        scroll.scrollToTop(); 
        };
     
     componentDidMount() {
        Aos.init({
            duration: 2000
        })
     }
     render(){
         return (
             <div className="scroll-dir" ref={this.scrollRef} onClick={this.scrollToTop}>
                 <i className="fas fa-chevron-circle-up fa-2x"></i>
             </div>
         )
     }
   
}

export default Upscroll;