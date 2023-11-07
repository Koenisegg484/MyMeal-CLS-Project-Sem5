// const NxtBtn = (props) =>{
//     return(
//         <button className="btnStart" onClick={props}>
//             {props.txt}
//         </button>
//     );
// };

// export default NxtBtn;


import React from 'react';

const NxtBtn = ({ txt, onClick }) => (
  <button className='btnStart' onClick={onClick}>
    {txt}
  </button>
);

export default NxtBtn;
