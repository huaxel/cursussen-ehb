document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar");
    const loadButton = document.getElementById("loadButton");
    const galleryElement = document.querySelector(".gallery");

    const imageUrls = [
        "https://info.betting.co.zw/wp-content/uploads/2023/12/IscoAlarcon.jpg",
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2025/02/27/370525.jpg",
        "https://e00-xlk-ue-marca.uecdn.es/uploads/2025/02/06/67a491345e96e.jpeg",
    ];

    function laadAfbeelding(url){
        return new Promise((resolve,reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            }
            img.onerror = () => {
                reject(new Error(`Fout bij het laden van afbeelding: ${url}`));
            }
            img.src = url;
        });
    }

    function updateProgress(huidigeAfbeelding,totaalAfbeeldingen){
        const percentage = Math.round((huidigeAfbeelding / totaalAfbeeldingen) * 100);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }

    async function laadGallerij(){
        galleryElement.innerHTML = '';
        progressBar.style.width = '0%';
        progressBar.textContent = '0%';

        for (let i = 0; i < imageUrls.length; i++) {
            try {
                const img = await laadAfbeelding(imageUrls[i]);
                galleryElement.appendChild(img);
                updateProgress(i + 1, imageUrls.length);
            } catch (error) {
                console.error(error);
            }
        }
    }

    loadButton.addEventListener('click',laadGallerij);
});
