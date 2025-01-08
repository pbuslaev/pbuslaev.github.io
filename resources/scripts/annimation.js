document.addEventListener("DOMContentLoaded", () => {
    const sun = document.getElementById("sun");
    const plane = document.getElementById("plane");
  
    function updateAnimation() {
        const now = new Date();
        const time = now.getSeconds() * 1000 + now.getMilliseconds();
        const elapsedTime = (time % 20000) / 20000;
        const elapsedPlaneTime = (time % 5000) / 5000;
  
        const sunX = elapsedTime * 100; // Moves from 0% to 100% horizontally
        const sunY = -Math.pow(elapsedTime - 0.5, 2) * 200 + 50; // Parabolic motion, peaks at 0.5 (center)

        const planeX = 100 - elapsedPlaneTime * 100;
        const planeY = 40 + 20 * elapsedPlaneTime;
   
        sun.style.transform = `translate(${sunX}%, ${sunY}%)`;
   
        plane.style.transform = `translate(${planeX}%, ${planeY}%)`;
        plane.style.opacity = planeOpacity;
   
      requestAnimationFrame(updateAnimation);
    }
   
    updateAnimation();
});