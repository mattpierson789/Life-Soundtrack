// Get all the tiles
const tiles = document.querySelectorAll('.tile');

// Keep track of the tile being dragged
let dragSrcEl = null;

// Event listener functions
function handleDragStart(e) {
  this.style.opacity = '0.4'; // set the opacity of the tile being dragged
  dragSrcEl = this; // store a reference to the tile being dragged
  e.dataTransfer.effectAllowed = 'move'; // set the allowed effect of the drag operation
  e.dataTransfer.setData('text/html', this.innerHTML); // set the data to transfer
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // prevent the default behavior of the browser
  }
  e.dataTransfer.dropEffect = 'move'; // set the drop effect
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over'); // add the 'over' class to the tile being hovered over
}

function handleDragLeave(e) {
  this.classList.remove('over'); // remove the 'over' class from the tile being hovered over
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // stop the event from bubbling up the DOM tree
  }

  if (dragSrcEl !== this) {
    // Create a temporary element to store the HTML content of the source tile
    const tempEl = document.createElement('div');
    tempEl.innerHTML = dragSrcEl.innerHTML;

    // Swap the HTML content of the source and target tiles
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = tempEl.innerHTML;
  }

  return false;
}

function handleDragEnd(e) {
  this.style.opacity = '1'; // set the opacity of the tile back to 1

}


// Add event listeners to the tiles

// Loop through the tiles and add event listeners
tiles.forEach(tile => {
  // Add event listener for when a tile is being dragged
  tile.addEventListener('dragstart', handleDragStart, false);

  // Add event listener for when a tile is being dragged over another tile
  tile.addEventListener('dragover', handleDragOver, false);

  // Add event listener for when a tile is being dragged into another tile
  tile.addEventListener('dragenter', handleDragEnter, false);

  // Add event listener for when a tile is being dragged out of another tile
  tile.addEventListener('dragleave', handleDragLeave, false);

  // Add event listener for when a tile is dropped onto another tile
  tile.addEventListener('drop', handleDrop, false);

  // Add event listener for when a tile drag operation ends
  tile.addEventListener('dragend', handleDragEnd, false);
});
