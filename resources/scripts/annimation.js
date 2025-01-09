document.addEventListener("DOMContentLoaded", () => {
    const coding = document.getElementById("coding");
    const sun = document.getElementById("sun");
    const plane = document.getElementById("plane");
    const box = document.getElementById("animation-box")
    
    function lerpColor(color1, color2, factor) {
        // Linear interpolation between two RGB colors
        const result = color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
        return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
      }

    function updateAnimation() {
        const now = new Date();
        const time = now.getSeconds() * 1000 + now.getMilliseconds();
        const elapsedTime = (time % 20000) / 20000;
        const dayTime = Math.floor(time / 20000) % 2;
        const elapsedPlaneTime = (time % 5000) / 5000;

        const color1 = [255, 255, 255];
        const color2 = [200, 200, 200];
        
        if (dayTime == 0) {
            sun.src = "./resources/images/sun.png";
            coding.src = "./resources/images/coding.webp";
            coding.style.right = 0;
            plane.style.display = "block";
            const sunX = elapsedTime * 100 * (1 - sun.offsetWidth / box.offsetWidth); // Moves from 0% to 100% horizontally
            const sunY = Math.pow(elapsedTime - 0.5, 2) * 150; // Parabolic motion, peaks at 0.5 (center)

            const planeX = 100 - elapsedPlaneTime * 100 * (1 - plane.offsetWidth / box.offsetWidth);
            const planeY = 40 - 20 * elapsedPlaneTime;
   
            sun.style.left = `${sunX}%`;
            sun.style.top = `${sunY}%`;
   
            plane.style.left = `${planeX}%`;
            plane.style.top = `${planeY}%`;

            if (elapsedPlaneTime < 0.1) {
                box.style.backgroundColor = lerpColor(color1, color2, 0.5*(0.1 - elapsedTime));
            }
            else if (elapsedPlaneTime > 0.9) {
                box.style.backgroundColor = lerpColor(color1, color2, 0.5*(elapsedTime - 0.9));
            }
        }
        else {
            sun.src = "./resources/images/moon.png";
            coding.src = "./resources/images/sleep.png";
            coding.style.left = 0;
            plane.style.display = "none";
            const sunX = elapsedTime * 100 * (1 - sun.offsetWidth / box.offsetWidth); // Moves from 0% to 100% horizontally
            const sunY = Math.pow(elapsedTime - 0.5, 2) * 150; // Parabolic motion, peaks at 0.5 (center)
   
            sun.style.left = `${sunX}%`;
            sun.style.top = `${sunY}%`;

            if (elapsedPlaneTime < 0.1) {
                box.style.backgroundColor = lerpColor(color1, color2, 1 - 0.5*(0.1 - elapsedTime));
            }
            else if (elapsedPlaneTime > 0.9) {
                box.style.backgroundColor = lerpColor(color1, color2, 1 - 0.5*(elapsedTime - 0.9));
            }
        }
   
        requestAnimationFrame(updateAnimation);
    }
   
    updateAnimation();
});