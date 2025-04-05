// Functie om een array met willekeurige getallen te genereren
const generateRandomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
};

// Bubblesort implementatie (inefficiënt)
const bubbleSort = (arr) => {
    const result = Array.from(arr);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Verwissel elementen
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
};

// Gebruik JavaScript's ingebouwde sort
const nativeSort = (arr) => {
    const result = Array.from(arr);
    return result.sort((a, b) => a - b);
};

const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};
// Functie om de tijd te meten

document.getElementById("compareButton").addEventListener("click", () => {
    const testArray = generateRandomArray(5000);
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    console.time("Bubble Sort");
    const bubbleStart = performance.now();
    const bubbleSortedArray = bubbleSort(testArray);
    const bubbleTime = performance.now() - bubbleStart;
    console.timeEnd("Bubble Sort");

    console.time("Native Sort");
    const startNative = performance.now();
    const nativeSortedArray = nativeSort(testArray);
    const nativeTime = performance.now() - startNative;
    console.timeEnd("Native Sort");

    console.assert(
        arraysAreEqual(bubbleSortedArray, nativeSortedArray),
        "De gesorteerde arrays zijn niet gelijk!"
    );

    console.group("Tijdresultaten");
    console.log('Eerste 5 elementen na bubble sort:', bubbleSortedArray.slice(0, 5));
    console.log('Eerste 5 elementen na native sort:', nativeSortedArray.slice(0, 5));
    console.log('Laatste 5 elementen na bubble sort:', bubbleSortedArray.slice(-5));
    console.log('Laatste 5 elementen na native sort:', nativeSortedArray.slice(-5));
    console.groupEnd();
    resultDiv.innerHTML =`
    <div class="result-item ${nativeTime < bubbleTime ? 'faster' : 'slower'}">
        <h3>Native Sort</h3>
        <p>Tijd: ${nativeTime.toFixed(2)} ms</p>
        </div>
    <div class="result-item ${bubbleTime <  nativeTime? 'faster' : 'slower'}">
        <h3>Bubble Sort</h3>
        <p>Tijd: ${bubbleTime.toFixed(2)} ms</p>
        </div>
        <p><strong>Verschil:</strong> ${Math.abs(nativeTime - bubbleTime).toFixed(2)} ms</p>
        
        <p>${nativeTime < bubbleTime ? 'Native sort' : 'Bubble sort'} was sneller</p>
    `;

    console.log('Performance resultaten:');
    const ratio = Math.max(bubbleTime , nativeTime) / Math.min(bubbleTime, nativeTime);
    console.log(`De snelste methode was ${ratio.toFixed(2)} keer sneller dan de andere methode.`);
});
