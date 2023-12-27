const button = document.getElementById("picker_btn")
const pickerResult = document.getElementById("picker_result")

const colorPicker = async () => {
    const eyeDropper = new EyeDropper()
    const { sRGBHex } = await eyeDropper.open()
    pickerResult.innerText = sRGBHex
}

button.addEventListener('click', colorPicker)