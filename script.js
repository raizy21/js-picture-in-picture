/******************************
 *  {@link}  - https://www.youtube.com/watch?v=L_LUpnjgPso
 *  {@link} - https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/
 *  {@link} - https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
 *  {@link} *_* - https://github.com/tc39/proposals
 ******************************/

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;

        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here 
        console.log('error fetching data :' + error);
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disbaled = false;
});

//on load
selectMediaStream();