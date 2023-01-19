import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const showOverlaySubject = new BehaviorSubject<boolean>(true);

export const showOverlay$ = showOverlaySubject.asObservable();

export const hideOverlay = () => showOverlaySubject.next(false);
export const showOverlay = () => showOverlaySubject.next(true);

export const useShowOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const sub = showOverlay$.subscribe((isShown) => setShowOverlay(isShown));
    return () => sub.unsubscribe();
  }, []);

  return showOverlay;
};
