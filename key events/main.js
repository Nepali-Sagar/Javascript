let box = document.querySelector(".box");
let container = document.querySelector(".container");

const space = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", (events) => {
  if (events.key.startsWith("Arrow")) {
    // console.log(events.key);

    let newX = x;
    let newY = y;

    switch (events.key) {
      case "ArrowUp":
        newY -= space
        break;
      case "ArrowDown":
        newY += space
        break;
      case "ArrowRight":
        newX += space
        break;
      case "ArrowLeft":
        newX -= space
        break;
    }
    
    // Get container and box dimensions
    const containerRect = container.getBoundingClientRect();
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    
    // Set boundary constraints
    const maxX = containerRect.width - boxWidth;
    const maxY = containerRect.height - boxHeight;
    
    // Apply constraints
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));
    
    x = newX;
    y = newY;
    
    box.style.top = `${y}px`
    box.style.left = `${x}px`
  }
}
);


