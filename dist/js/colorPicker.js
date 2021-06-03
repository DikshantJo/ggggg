/* const valueInput = document.querySelector('.textPic');
const colorInput = document.querySelector('.colorPic');
const valueInputII = document.querySelector('.textPicII');
const colorInputII = document.querySelector('.colorPicII');

// Sync the color from the picker for PICKERI
const syncColorFromPicker = () => {
valueInput.value = colorInput.value;
valueInputII.value = colorInputII.value;
};

// Sync the color from the field
const syncColorFromText = () => {
colorInput.value = valueInput.value;
colorInputII.value = valueInputII.value;
};

/////////////////////////

// Bind events to callbacks
colorInput.addEventListener("input", syncColorFromPicker, false);
valueInput.addEventListener("input", syncColorFromText, false);
colorInputII.addEventListener("input", syncColorFromPicker, false);
valueInputII.addEventListener("input", syncColorFromText, false);



// Optional: Trigger the picker when the text field is focused
valueInput.addEventListener("focus", () => colorInput.click(), false);
valueInputII.addEventListener("focus", () => colorInput.click(), false);

// Refresh the text field
syncColorFromPicker(); */