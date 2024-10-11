// ! 1. Yol
const piInput = document.querySelector("#piInput");
const piVolume = document.querySelector("#piVolume");

piInput.addEventListener("input", () => {
    const pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

    let inputValue = piInput.value;
    let bilinenRakam = 0;

    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === pi[i]) {
            bilinenRakam++;
            piVolume.textContent = bilinenRakam;
        } else {
            break;
        }
    }

})


// ! 2. Yol 
const ustKısım = document.querySelector(".ust-kısım");
const volume = document.querySelector(".volume");
const sliderBox = document.getElementById("sliderBox");
const volumeIcon = document.getElementById("volumeIcon");
const container = document.querySelector(".slider-container");

volume.addEventListener("click", () => {
    if (ustKısım.style.display === "none" || ustKısım.style.display === "") {
        ustKısım.style.display = "block";
    } else {
        ustKısım.style.display = "none";
    }
});

// Slider kutusunu hareket ettir
sliderBox.addEventListener("mousedown", (e) => {
    const containerRect = container.getBoundingClientRect();
    const offsetX = e.clientX - sliderBox.getBoundingClientRect().left;

    const moveSlider = (moveEvent) => {
        let newX = moveEvent.clientX - containerRect.left - offsetX;
        newX = Math.max(0, Math.min(newX, containerRect.width - sliderBox.offsetWidth));
        
        // Slider kutusunu hareket ettir
        sliderBox.style.left = newX + 'px';
        
        // İkonu güncelle
        if (newX === 0) {
            volumeIcon.className = "fa-solid fa-volume-xmark fs-2";
        } else {
            volumeIcon.className = "fa-solid fa-volume-high fs-2";
        }

        // Arka planı güncelle (karakterin renginde boyama)
        container.style.background = `linear-gradient(to right, blue ${newX}px, #ccc ${newX}px)`;
    };

    const stopSlider = () => {
        document.removeEventListener("mousemove", moveSlider);
        document.removeEventListener("mouseup", stopSlider);
    };

    document.addEventListener("mousemove", moveSlider);
    document.addEventListener("mouseup", stopSlider);
});


// ! 3. Yol
const icon = document.getElementById('rotateIcon');
const progress = document.getElementById('progress');
let rotation = 0;

icon.addEventListener('mousedown', () => {
    rotation = -90; // Saat yönünün tersine 90 derece döndür
    icon.style.transform = `rotate(${rotation}deg)`;
    icon.classList.remove('fa-volume-off');
    icon.classList.add('fa-volume-low');
    updateProgressBar(rotation);
});

icon.addEventListener('mouseup', () => {
    rotation = 0; // Sıfıra geri döndür
    icon.style.transform = `rotate(${rotation}deg)`;
    icon.classList.remove('fa-volume-low');
    icon.classList.add('fa-volume-off');
    updateProgressBar(rotation);
});

icon.addEventListener('mouseleave', () => {
    rotation = 0; // Fare dışına çıkınca sıfıra döndür
    icon.style.transform = `rotate(${rotation}deg)`;
    icon.classList.remove('fa-volume-low');
    icon.classList.add('fa-volume-off');
    updateProgressBar(rotation);
});

// İlerleme çubuğunu güncelleyen fonksiyon
function updateProgressBar(rotation) {
    const percentage = Math.max(0, Math.min(100, ((rotation + 90) / 90) * 100)); // 0-100 aralığı
    progress.style.width = `${percentage}%`; // Genişliği güncelle
}