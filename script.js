function saveEntry() {
    const diaryEntry = document.getElementById('diaryEntry').value;
    if (!diaryEntry) {
        alert('Please write something before saving.');
        return;
    }

    const date = new Date();
    const entry = {
        text: diaryEntry,
        date: date.toLocaleString()
    };

    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.unshift(entry);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));

    document.getElementById('diaryEntry').value = '';
    displayEntries();
}

function displayEntries() {
    const entriesContainer = document.getElementById('entries');
    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

    entriesContainer.innerHTML = entries
        .map(entry => `<div class="entry"><p>${entry.text}</p><small>${entry.date}</small></div>`)
        .join('');
}

window.onload = displayEntries;

