const messageInput = document.getElementById('messageInput');
const resultBox = document.getElementById('resultBox');
const successMessage = document.getElementById('successMessage');
const runBtn = document.getElementById('runBtn');

runBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  resultBox.innerHTML = '';
  const icon = document.createElement('span');
  icon.textContent = '💬';
  resultBox.append(icon, document.createTextNode(message || 'Sua variável está vazia.'));
  successMessage.textContent = message
    ? '✨ Muito bem! Você alterou o valor guardado na variável.'
    : '💡 Uma variável pode guardar um texto, número ou outra informação.';
});

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') runBtn.click();
});

const contrastBtn = document.getElementById('contrastBtn');
contrastBtn.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('high-contrast');
  contrastBtn.setAttribute('aria-pressed', String(enabled));
  contrastBtn.textContent = enabled ? '◐ Contraste normal' : '◐ Alto contraste';
});


// Menu compacto para celulares
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});
