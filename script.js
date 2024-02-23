// This for the types.html page 
document.addEventListener('DOMContentLoaded', function() {
    // Example data for types of tea
    const teaData = {
        "Green Tea": "Green tea is made from unoxidized leaves and is one of the less processed types of tea. It therefore contains the most antioxidants and beneficial polyphenols.",
        "Black Tea": "Black tea is more oxidized than green, oolong, and white teas. Black tea is stronger in flavor and contains more caffeine than other teas.",
        "Oolong Tea": "Oolong tea is partially oxidized, making it a mid-ground between green and black tea in terms of oxidation and flavor.",
        "White Tea": "White tea is known for its delicate flavors and subtle sweetness. It is harvested before the tea plant’s leaves open fully, so they are covered with white hairs, hence the name."
    };

    // Assuming each tea type is a button in the HTML
    document.querySelectorAll('.tea-type-btn').forEach(button => {
        button.addEventListener('click', function() {
            const teaName = this.getAttribute('data-tea-name');
            const description = teaData[teaName];
            document.getElementById('tea-description').innerText = description;
        });
    });
});
// This for the types.html page ^

//Featured Teas section of index.html
document.addEventListener('DOMContentLoaded', function() {
    const teas = document.querySelectorAll('.tea');
    
    function updateCups(action) {
        teas.forEach(tea => {
            const cup = tea.querySelector('.cup');
            if (action === 'fill') {
                cup.classList.add('pour', tea.id);
            } else if (action === 'clear') {
                cup.classList.remove('pour');
            }
        });
    }

    // Fill cups with tea
    document.getElementById('fill-teas').addEventListener('click', function() {
        updateCups('fill');
    });

    // Clear cups
    document.getElementById('clear-teas').addEventListener('click', function() {
        updateCups('clear');
    });
});

//Featured Teas section of index.html ^
