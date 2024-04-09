
 function isMobile() {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  }
  
  
export function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const num = isMobile() ? 100 : 250;
    const padding = isMobile() ? 10 : 50;
  
    const x = Math.random() * (width - window.innerWidth*.2) + padding;
    const y = Math.random() * (height - window.innerHeight*.2) + padding;
    return { x, y };
  }