import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';


// TODO: Correct the bug on trasitionFinish conditional. Note: setLocation(to) is not executed
export function useTransitionNavigation() {
    const [, setLocation] = useLocation();
    const [onTransition, setOnTransition] = useState(false);
    const [transitionFinish, setTransitionFinish] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(null);

    useEffect(() => {
        if (transitionFinish && pendingNavigation) {
            setLocation(pendingNavigation);
        }

    }, [pendingNavigation, transitionFinish]);

    const navigateWithTransition = (to) => {
        setOnTransition(true);
        setPendingNavigation(to);
    };

    return [onTransition, setTransitionFinish, navigateWithTransition];
}

