// 카메라 스트림 연결
const videoElement = document.getElementById('cameraStream');

// 카메라 접근 요청 함수
function startCameraStream() {
    // 해상도 설정 포함한 카메라 접근 요청
    navigator.mediaDevices.getUserMedia({
        video: {
            width: { ideal: 1280 },  // 해상도 설정 (최적화된 값 사용)
            height: { ideal: 720 },
            facingMode: 'user'        // 전면 카메라 (후면은 'environment')
        }
    })
    .then((stream) => {
        // 카메라 스트림을 비디오 요소에 연결
        videoElement.srcObject = stream;
    })
    .catch((error) => {
        // 카메라 접근 실패 시 처리
        console.error('Error accessing camera:', error);

        // 사용자에게 접근 실패 알림
        alert('Camera access was denied or an error occurred. Please check your permissions.');
    });
}

// 브라우저가 MediaDevices API를 지원하는지 확인
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    startCameraStream();
} else {
    alert('Your browser does not support camera access.');
}navigator.mediaDevices.getUserMedia({
    video: {
        width: { ideal: 640 },  // 해상도를 낮추어 설정
        height: { ideal: 480 },
        facingMode: 'user'  // 'environment'를 사용해 후면 카메라로 전환 가능
    }
})
.then((stream) => {
    const videoElement = document.getElementById('cameraStream');
    videoElement.srcObject = stream;
})
.catch((error) => {
    console.error('Camera access error:', error);
});
