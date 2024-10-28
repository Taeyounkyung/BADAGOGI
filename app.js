import React, { useEffect, useRef } from 'react';

function CameraComponent() {
    // useRef를 사용하여 비디오 요소에 접근
    const videoRef = useRef(null);

    // 카메라 접근 요청 함수
    const startCameraStream = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: { ideal: 640 },
                height: { ideal: 480 },
                facingMode: 'user'
            }
        })
        .then((stream) => {
            // 비디오 요소가 존재할 경우 스트림 연결
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                console.log("Camera stream started successfully.");
            }
        })
        .catch((error) => {
            console.error('Error accessing camera:', error);
            alert('Camera access was denied or an error occurred. Please check your permissions.');
        });
    };

    useEffect(() => {
        // 버튼 클릭 이벤트 설정
        const startButton = document.getElementById('startCamera');
        if (startButton) {
            startButton.addEventListener('click', startCameraStream);
        }

        // 클린업 함수로 버튼 이벤트 제거
        return () => {
            if (startButton) {
                startButton.removeEventListener('click', startCameraStream);
            }
        };
    }, []);

    return (
        <>
            <button id="startCamera">Start Camera</button>
            <video ref={videoRef} autoPlay playsInline muted></video>
        </>
    );
}

export default CameraComponent;
