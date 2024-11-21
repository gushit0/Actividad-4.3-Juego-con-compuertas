// Función para compuerta AND
function runAnd() {
    const a = document.getElementById('and-a').checked ? 1 : 0;
    const b = document.getElementById('and-b').checked ? 1 : 0;
    const result = a && b;
    document.getElementById('and-result').textContent = result;
}

// Función para compuerta OR
function runOr() {
    const a = document.getElementById('or-a').checked ? 1 : 0;
    const b = document.getElementById('or-b').checked ? 1 : 0;
    const result = a || b;
    document.getElementById('or-result').textContent = result;
}

// Función para compuerta NOT
function runNot() {
    const a = document.getElementById('not-a').checked ? 1 : 0;
    const result = !a ? 1 : 0;
    document.getElementById('not-result').textContent = result;
}
