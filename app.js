let numbers = [];
function getArray() {
    const input = document.getElementById("arrayInput").value;
    numbers = input.split(",")
        .map((num) => parseFloat(num.trim()))
        .filter((num) => !isNaN(num));
}

function displayResult(text) {
    document.getElementById("result").innerText = text;
}

function sortArray() {
    getArray();
    displayResult("Ascending Sorted: " + numbers.sort((a, b) => a - b));
}

function findEven() {
    getArray();
    displayResult("Evens: " + numbers.filter((num) => num % 2 === 0));
}

function findPrime() {
    getArray();
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
    displayResult("Prime: " + numbers.filter(isPrime));
}

function findMax() {
    getArray();
    const max = Math.max(...numbers);
    displayResult("Max: " + max);
}

function findMin() {
    getArray();
    const min = Math.min(...numbers);
    displayResult("Min: " + min);
}

function findSum() {
    getArray();
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    displayResult("Sum: " + sum);
}

function findAverage() {
    getArray();
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    displayResult("Average: " + (sum / numbers.length || 0));
}

function findDuplicate() {
    getArray();
    const seen = new Set();
    const duplicates = numbers.filter((num) => {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
        return false;
    });
    displayResult("Duplicates: " + (duplicates.length > 0 ? duplicates : "None"));
}

function removeDuplicates() {
    getArray();
    const uniqueNumbers = [...new Set(numbers)];
    displayResult("Unique Numbers: " + uniqueNumbers);
}

function reverseArray() {
    getArray();
    const reversed = [...numbers].reverse();
    displayResult("Reversed: " + reversed);
}

function findOdd() {
    getArray();
    displayResult("Odds: " + numbers.filter((num) => num % 2 !== 0));
}

function findSquare() {
    getArray();
    const squares = numbers.map((num) => num * num);
    displayResult("Squares: " + squares);
}

function findMode() {
    getArray();
    if (numbers.length === 0) {
        displayResult("Array is empty.");
        return;
    }
    const frequency = {};
    let maxFreq = 0;
    let mode = [];

    for (const num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = [num];
        } else if (frequency[num] === maxFreq) {
            mode.push(num);
        }
    }

    displayResult("Mode: " + mode.join(", "));
}

function findadds() {
    getArray();
    const adds = numbers.filter((num) => num > 0);
    displayResult("Positive Numbers: " + adds);
}

function findMedian() {
    getArray();
    numbers.sort((a, b) =>
        a - b
    );
    const mid = Math.floor(numbers.length / 2);
    let median;
    if (numbers.length % 2 === 0) {

        median = (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
        median = numbers[mid];
    }
    displayResult("Median: " + median);

}

function findValue() {
    getArray();
    constvalue = parseFloat(document.getElementById("valueInput").value);
    if (isNaN(constvalue)) {
        displayResult("Please enter a valid number to search.");
        return;
    }
    const index = numbers.indexOf(constvalue);
}