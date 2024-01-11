document.getElementById('load').addEventListener('click', () => {
    fetch('/datos')
        .then(response => response.json())
        .then(data => {
            console.log('Original Data:', data);
            localStorage.setItem('jsonData', JSON.stringify(data));
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('modify').addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('jsonData'));
    data.users.push({nombre: "Nuevo Usuario", edad: 30, ciudad: "Ciudad Nueva"});
    fetch('/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.text())
        .then(text => console.log(text));
});

document.getElementById('overwrite').addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('jsonData'));
    data.users.push({nombre: "Otro Usuario", edad: 25, ciudad: "Otra Ciudad"});
    fetch('/sobrescribir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.text())
        .then(text => console.log(text));
});
