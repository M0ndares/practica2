function createTable(tipo) {
    if (tipo === 'T') tipo = null;
    const lista = JSON.parse(localStorage.getItem('lista')) || []; 
    const main = document.getElementById('tabla');
    main.innerHTML = '';

    if (tipo === 'O') return;

    for (let i = 0; i < lista.length; i++) {
        const atributos = ['id', 'nombre', 'departamento'];
        if (tipo === null || lista[i]['departamento'] === tipo) {
            const newCol = document.createElement('tr');
            
            for (let j = 0; j < atributos.length; j++) {
                const newAtributo = document.createElement('td');
                const valor = lista[i][atributos[j]];
                newAtributo.textContent = valor.toUpperCase();
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
        departamento: departamento
    };

    let lista = JSON.parse(localStorage.getItem('lista')) || [];
    const existe = lista.some(item => item.id === idInventario);

    if (!existe) {
        lista.push(newRow);
        localStorage.setItem('lista', JSON.stringify(lista));
        
        console.log("Nuevo registro:", newRow);
        createTable('T'); 
        alert('Registro realizado con éxito');
        
        document.getElementById('idInventario').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('departamento').value = '';
    } else {
        alert('ID ya utilizado');
    }
}