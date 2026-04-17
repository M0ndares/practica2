function createTable(tipo) {
    if (tipo === 'T') tipo = null;
    const isTrue = true;
    const lista = JSON.parse(localStorage.getItem('lista'));
    const main = document.getElementById('tabla');
    main.innerHTML = '';
    if (tipo === 'O') return;
    for (let i = 0; i < lista.length; i++ ) {
        const atributos = ['id', 'nombre', 'departamento']
        if(tipo === lista[i]['departamento'] || tipo === null) {
            newCol = document.createElement('tr');
            for(let j = 0; atributos.length > j; j++) {
                const newAtributo = document.createElement('td');
                newAtributo.textContent = `${lista[i][atributos[j]].toUpperCase()}`
                newCol.appendChild(newAtributo);
            }
            main.appendChild(newCol);
        }
    }
}

function listo() {
    const idInventario = document.getElementById('idInventario').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const departamento = document.getElementById('departamento').value.trim();
    if (!idInventario || !nombre || !departamento) {
        alert('Todos los campos son obligatorios');
        return;
    }

    const newRow = {
        id: idInventario, 
        nombre: nombre,
        departamento:departamento
    };

    if( localStorage.getItem('lista') === null){
        let lista = [];
        lista.push(newRow);
        localStorage.setItem('lista', JSON.stringify(lista));
        console.log(newRow)
    } else {
        let lista = JSON.parse(localStorage.getItem('lista'));
        lista.push(newRow);
        localStorage.setItem('lista', JSON.stringify(lista));
        console.log(newRow)
    }

    alert('Registro realizado con éxito');
    createTable('T');
}
