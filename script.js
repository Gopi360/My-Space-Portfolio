document.addEventListener("DOMContentLoaded", function() {

    // --- YOUR PROJECT DATA --- (This stays the same)
    const projects = [
        { name: "Heart Disease Prediction", desc: "Predicts Heart Disease Using XGBoost. Users input data via a Flask form, and the model provides a prediction.", tech: "Python, Machine Learning, Flask, XGBoost", link: "https://github.com/Gopi360/Heart-Disease-Prediction" },
        { name: "Fruit and Vegis Classification", desc: "A fun project where a user can upload a photo of a fruit or vegetable, and the ML model will identify it.", tech: "Python, ML(classification), Flask", link: "https://github.com/Gopi360/Fruit-Vegis-Classification-Model" },
        { name: "QR Code Generator", desc: "A web app that converts any user-provided text or link into a downloadable QR code in JPG format.", tech: "Python, Flask, QRCode", link: "https://github.com/Gopi360/QR_CODE-Generator-" },
        { name: "Youtube Video Downloader", desc: "A simple webpage where users can paste a YouTube video link to get a direct download of the video file.", tech: "Python, Flask, yt_dlp, request", link: "https://github.com/Gopi360/Youtube-Video-Downloader" },
        { name: "Phoenix AI Assistant", desc: "A Jarvis-like AI that responds to voice commands to perform tasks like sending WhatsApp messages, taking photos, web searching, and controlling the PC.", tech: "Python, Speech Recognition, pyttsx3, OpenCV", link: "https://github.com/Gopi360/AI_Project" },
        { name: "Hand Gesture Mouse Controller", desc: "Control the computer's mouse pointer, including right and left clicks, using hand gestures via the webcam.", tech: "Python, OpenCV, Mediapipe, Pyautogui", link: "https://github.com/Gopi360/Hand_Gesture_Mouse_Controller" },
        { name: "Smart Attendance System", desc: "Reduces proxy attendance by using facial recognition to mark attendance during exams, storing data in MySQL.", tech: "Python, OpenCV, FaceNet, MTCNN, MySQL, Flask", link: "https://github.com/Gopi360/Smart-Exam-Hall-Attendance-System" },
        { name: "Exam Assistant", desc: "A tool for online exams that sends selected text from a PC to the Gemini API and displays the result on a connected mobile device.", tech: "Python, Flask, Gemini API, Paperclip", link: "https://github.com/Gopi360/Exam_Assistant" },
        { name: "Banking System", desc: "A simple command-line tool for tracking daily expenses, managing deposits, withdrawals, and viewing transaction history.", tech: "Python", link: "https://github.com/Gopi360/Banking_System" },
        { name: "Traffic Flow Analysis", desc: "Analyzes CCTV video footage to count and monitor the number of vehicles in different lanes on a road.", tech: "Python, Computer Vision, YOLOv8, ByteTrack", link: "https://github.com/Gopi360/Traffic-Flow-Analysis" },
        { name: "Remote Typer", desc: "Allows a user to type text on their mobile device's browser and have it appear on their PC wherever the cursor is placed.", tech: "Python, Flask, Pyautogui", link: "https://github.com/Gopi360/Remote_Typer" }
    ];

    // --- POPULATE PROJECTS --- (This stays the same)
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(p => {
        projectsContainer.innerHTML += `
            <div class="project-card">
                <h3>${p.name}</h3>
                <p class="tags">${p.tech}</p>
                <p>${p.desc}</p>
                <a href="${p.link}" target="_blank">View on GitHub &rarr;</a>
            </div>
        `;
    });

    // --- UI ELEMENTS ---
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    const contentContainer = document.getElementById('content-container');
    const videoElement = document.getElementById('bg-video');

    // --- START BUTTON LOGIC ---
    startBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        contentContainer.classList.add('visible');
    });

    // --- VIDEO PLAYLIST LOGIC ---
    const videoPlaylist = [
        'assets/videos/Galaxy1.mp4',
        'assets/videos/Galaxy2.mp4',
        'assets/videos/Galaxy3.mp4',
        'assets/videos/Galaxy4.mp4'
    ];
    let currentVideoIndex = 0;

    // Function to play the next video in the list
    function playNextVideo() {
        // Move to the next video, and loop back to the start if at the end
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        videoElement.src = videoPlaylist[currentVideoIndex];
        videoElement.play();
    }

    // Set the initial video
    videoElement.src = videoPlaylist[currentVideoIndex];

    // Add an event listener to the video element that waits for the current video to end
    videoElement.addEventListener('ended', playNextVideo);

});