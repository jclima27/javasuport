// Filtro
document.getElementById('filterInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const blocks = document.querySelectorAll('.block');
    const sectionTitles = document.querySelectorAll('.section-title'); // Seleciona todos os títulos de seção
  
    // Primeiro, percorre todos os blocos e aplica o filtro
    blocks.forEach((block) => {
        const tags = block.dataset.tags.toLowerCase();
        const content = block.textContent.toLowerCase();
    
        const match = tags.includes(query) || content.includes(query);
        block.style.display = match ? 'block' : 'none';
    });

    // Agora, percorre todos os títulos de seção e esconde aqueles cujos blocos estejam todos ocultos
    sectionTitles.forEach((title) => {
        const section = title.closest('.section'); // Encontrar a seção que contém o título
        const sectionBlocks = section.querySelectorAll('.block'); // Todos os blocos da seção
        let sectionHasVisibleBlock = false;

        // Verifica se há ao menos um bloco visível
        sectionBlocks.forEach((block) => {
            if (block.style.display !== 'none') {
                sectionHasVisibleBlock = true;
            }
        });

        // Se não houver blocos visíveis, esconde o título
        title.style.display = sectionHasVisibleBlock ? 'block' : 'none';
    });
});

  
  // Botão de copiar
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.nextElementSibling.querySelector('code').innerText;
  
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copiado!';
        setTimeout(() => {
          btn.textContent = 'Copiar';
        }, 1500);
      });
    });
  });
  