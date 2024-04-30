import { useState, useEffect } from 'react';

function useDelayedMount(isVisible, renderDelay = 1, animationDelay = 1, exitDelay = 500) {
    const [shouldRender, setShouldRender] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        let renderTimerId, animationTimerId, exitTimerId;

        if (isVisible) {
            renderTimerId = setTimeout(() => {
                setShouldRender(true);
            }, renderDelay);

            animationTimerId = setTimeout(() => {
                setShouldAnimate(true);
            }, renderDelay + animationDelay);
        } else {
            setShouldAnimate(false); // Trigger exit animation
            exitTimerId = setTimeout(() => {
                setShouldRender(false);
            }, exitDelay);
        }

        return () => {
            clearTimeout(renderTimerId);
            clearTimeout(animationTimerId);
            clearTimeout(exitTimerId);
        };
    }, [isVisible, renderDelay, animationDelay, exitDelay]);

    return { shouldRender, shouldAnimate };
}

export default useDelayedMount;


// import { useState, useEffect } from 'react';

// function useDelayedMount(isVisible, renderDelay = 1, animationDelay = 1, exitDelay = 500) {
//     const [shouldRender, setShouldRender] = useState(false);
//     const [shouldAnimate, setShouldAnimate] = useState(false);

//     useEffect(() => {
//         let renderTimerId, animationTimerId, exitTimerId;

//         // Clear animation timer when the component unmounts or when it's no longer visible
//         return () => {
//             clearTimeout(animationTimerId);
//         };

//     }, [isVisible]);

//     useEffect(() => {
//         let renderTimerId, animationTimerId, exitTimerId;
//         if (isVisible) {
//             renderTimerId = setTimeout(() => {
//                 setShouldRender(true);
//                 animationTimerId = setTimeout(() => {
//                     setShouldAnimate(true);
//                 }, animationDelay);
//             }, renderDelay);
//         } else {
//             setShouldAnimate(false); // Trigger exit animation
//             exitTimerId = setTimeout(() => {
//                 setShouldRender(false);
//             }, exitDelay);
//         }

//         return () => {
//             clearTimeout(renderTimerId);
//             clearTimeout(animationTimerId);
//             clearTimeout(exitTimerId);
//         };
//     }, [isVisible, renderDelay, animationDelay, exitDelay]);

//     return { shouldRender, shouldAnimate };
// }

// export default useDelayedMount;

