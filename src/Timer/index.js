import React, {useState, useEffect} from "react";

const Timer = ({ duration }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        // Cek waktu akhir di localStorage
        let endTime = localStorage.getItem("countdownEndTime");

        if (!endTime) {
            // Jika belum ada waktu akhir, set waktu akhir baru
            endTime = Date.now() + duration;
            localStorage.setItem("countdownEndTime", endTime);
        }

        // Hitung waktu yang tersisa setiap detik
        const interval = setInterval(() => {
            const remainingTime = endTime - Date.now();
            if (remainingTime <= 0) {
                // Jika waktu habis, set waktu tersisa ke 0 dan clear interval
                setTimeLeft(0);
                clearInterval(interval);
                localStorage.removeItem("countdownEndTime");
            } else {
                setTimeLeft(remainingTime);
            }
        }, 1000);

        // Cleanup interval saat komponen di-unmount
        return () => clearInterval(interval);
    }, [duration]);

    // Fungsi untuk memformat waktu dalam hari, jam, menit, dan detik
    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${days} Day : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
    };

    return <div>{getFormattedTime(timeLeft)}</div>;
};


export default Timer;
