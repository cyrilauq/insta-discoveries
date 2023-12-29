const button = document.getElementById("picker_btn")
const pickerResult = document.getElementById("picker_result")

const colorPicker = async () => {
    const eyeDropper = new EyeDropper() // Returns a new EyeDropper instance.
    const { sRGBHex } = await eyeDropper.open() // Returns a promise that resolves to an object that gives access to the selected color.
    pickerResult.innerText = sRGBHex
}

button.addEventListener('click', colorPicker)