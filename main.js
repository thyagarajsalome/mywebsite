document.addEventListener('DOMContentLoaded', function () {
  // Sample colors
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

  // Dynamically generate color options
  const colorPalette = document.getElementById('colorPalette');
  colors.forEach(color => {
    const colorOption = document.createElement('div');
    colorOption.classList.add('colorOption');
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener('click', () => selectColor(color));
    colorPalette.appendChild(colorOption);
  });

  // Function to handle color selection
  function selectColor(color) {
    // Update room preview and perform any other necessary actions
    const roomCanvas = document.getElementById('roomCanvas');
    roomCanvas.style.backgroundColor = color;

    // Update color preview
    const colorPreview = document.getElementById('colorPreview');
    colorPreview.style.backgroundColor = color;
  }
});
