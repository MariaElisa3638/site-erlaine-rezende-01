//Código para fazer a parte dos comentários// Configuração opcional do carrossel
let indiceAtual = 0;
const comentarios = document.querySelectorAll('.comentario-item');
const totalComentarios = comentarios.length;
const comentariosPorPagina = 3;
const totalPaginas = Math.ceil(totalComentarios / comentariosPorPagina);

function mostrarComentarios(indice) {
    // Esconde todos os comentários
    comentarios.forEach(comentario => {
        comentario.classList.remove('active');
    });

    // Mostra os 3 comentários da página atual
    for (let i = 0; i < comentariosPorPagina; i++) {
        const comentarioIndex = (indice * comentariosPorPagina + i) % totalComentarios;
        if (comentarios[comentarioIndex]) {
            comentarios[comentarioIndex].classList.add('active');
        }
    }

    // Atualiza indicadores
    atualizarIndicadores();
}

function atualizarIndicadores() {
    const indicadores = document.querySelectorAll('.indicador');
    indicadores.forEach((indicador, index) => {
        if (index === indiceAtual) {
            indicador.className = 'indicador ellipse-3'; // Ativo
        } else {
            indicador.className = 'indicador ellipse-2'; // Inativo
        }
    });
}

function proximosComentarios() {
    indiceAtual = (indiceAtual + 1) % totalPaginas;
    mostrarComentarios(indiceAtual);
}

function comentariosAnteriores() {
    indiceAtual = indiceAtual - 1;
    if (indiceAtual < 0) indiceAtual = totalPaginas - 1;
    mostrarComentarios(indiceAtual);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
    mostrarComentarios(indiceAtual);

    // Adicionar clique nos indicadores
    const indicadores = document.querySelectorAll('.indicador');
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', function () {
            indiceAtual = index;
            mostrarComentarios(indiceAtual);
        });
    });
});