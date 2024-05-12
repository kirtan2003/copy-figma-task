// import React, { useState } from 'react';
// import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// import './Flipped.css'

// function Flip() {
//     const [isAnimating, setIsAnimating] = useState(false);

//     const [currentImage, setCurrentImage] = useState(1);

//     const handleClick = () => {
//         setCurrentImage(currentImage === 1 ? 2 : 1);
//         setIsAnimating(true);
//         setTimeout(() => setIsAnimating(false), 500); // Timeout for animation duration
//     };

//     return (
//         // <div className="container cursor-pointer w-[712px] h-[393.19]">
//         //     <img
//         //         src={`image${currentImage}.png`}
//         //         className="image"
//         //         alt={`Image ${currentImage}`}
//         //         onClick={handleClick}
//         //     />
//         // </div>

//         <div className="image-container">
//           {currentImage === 1 && <div className='cursor-pointer w-[712px] h-[393.19]'><img
//                 src="image1.png"
//                 alt="Image 1"
//                 className={`clickable-image ${isAnimating ? 'shrink' : ''}`}
//                 onClick={handleClick}
//             /></div>}  
//             {currentImage === 2 && <div className='cursor-pointer w-[712px] h-[393.19]'> <img
//                 src="image2.png"
//                 alt="Image 2"
//                 className={`clickable-image ${isAnimating ? 'shrink' : ''}`}
//                 onClick={handleClick}
//             /></div>}
//         </div>
//     );
// }

// import React, { useState } from "react";
// import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// import "./Flipped.css";



// function Flip() {
//   const [revealed, setRevealed] = useState(false);

//   const clickHandler = () => setRevealed((prevRevealed) => !prevRevealed);
 
//   const cardId = 1;

//   return (
//     <div className="App">

//         <AnimatePresence mode='wait'>
//           <Card
//             key={`${cardId}-${revealed}`}
//             cardId={cardId}
//             clickHandler={clickHandler}
//             revealed={revealed}
//           />
//         </AnimatePresence>

//     </div>
//   );
// }

// function Card({ cardId, clickHandler, revealed }) {
//   const cardProps = {
//     layoutId: {cardId},
//     id: {cardId},
//     className: "card",
//     onClick: clickHandler
//   };
//   const animationProps = {
//     initial: { rotateY: 180 },
//     animate: { rotateY: 170, transition: { duration: 3 } },
//     exit: { rotateY: 170, transition: { duration: 3 } }
//   };
//   return (
//     <motion.div {...cardProps} {...animationProps}>
//       <div className='items-center cursor-pointer w-[712px] h-[393.19]'><img alt={cardId} src={`image${revealed ? cardId : 2}.png`} /></div>
//     </motion.div>
//   );
// }

// export default Flip

import React, { useState } from "react";
import "./Flipped.css";

function Flip() {
  const [revealed, setRevealed] = useState(false);

  const clickHandler = () => setRevealed((prevRevealed) => !prevRevealed);

  const cardId = 1;

  return (
    <div className="App">
      <div className="card" onClick={clickHandler}>
        <div className={`flip-container ${revealed ? "flipped" : ""}`}>
          <div className="flipper">
            <div className="front">
              <img alt={cardId} className="cursor-pointer" src={`image${cardId}.png`} />
            </div>
            <div className="back">
              <img alt={cardId} className="cursor-pointer" src={`image2.png`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flip;



