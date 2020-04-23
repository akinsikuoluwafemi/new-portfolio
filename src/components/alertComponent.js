import React from 'react';
import Alert from '@material-ui/lab/Alert';



//  function Alertcomponent() {
//     return (
//         <div class="alert alert-success text-center" role="alert">
//             Your message was sent successfully, and we will be talking soon. 
//         </div>
//     )
// }


// export default Alertcomponent;

const Alertcomponent = ({message}) => {

    return <Alert style={{background: 'teal', color: '#fff', fontWeight: 'bold'}} severity="success">{message}</Alert>

}

export default Alertcomponent;