import React, { useEffect } from 'react';

function CameraComponent() {
    useEffect(() => {
        // 비디오 요소 선택
        const videoElement = document.getElementById('cameraStream');

        // 카메라 접근 요청 함수
        function startCameraStream() {
            navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 640 },  // 모바일 환경 최적화를 위한 해상도 설정
                    height: { ideal: 480 },
                    facingMode: 'user'      // 전면 카메라 ('environment'는 후면 카메라)
                }
            })
            .then((stream) => {
                // 카메라 스트림을 비디오 요소에 연결
                videoElement.srcObject = stream;
                document.getElementById('startCamera').style.display = 'none';  // 버튼 숨기기
                console.log("Camera stream started successfully.");  // 카메라 시작 로그
            })
            .catch((error) => {
                // 카메라 접근 실패 시 처리
                console.error('Error accessing camera:', error);
                alert('Camera access was denied or an error occurred. Please check your permissions.');
            });
        }

        // MediaDevices API 지원 여부 확인 후 버튼 클릭으로 카메라 시작
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            document.getElementById('startCamera').addEventListener('click', startCameraStream);
        } else {
            alert('Your browser does not support camera access.');
        }
    }, []);

    return (
        <>
            <button id="startCamera">Start Camera</button>
            <video id="cameraStream" autoPlay playsInline muted></video>
        </>
    );
}

export default CameraComponent;
