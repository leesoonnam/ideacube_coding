function showRegistrationModal() {
  window.open('https://forms.gle/PM6q1GYgnsE88wAY8', '_blank');
}

function hideRegistrationModal() {
  document.getElementById('registrationModal').classList.add('hidden');
  document.getElementById('registrationModal').classList.remove('flex');
}

document.getElementById('registrationForm').onsubmit = function(e) {
  e.preventDefault();
  hideRegistrationModal();
  showSuccessMessage();
}

function showSuccessMessage() {
  const successModal = document.createElement('div');
  successModal.className = 'fixed top-4 right-4 bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg';
  successModal.textContent = '신청이 완료되었습니다. 곧 연락드리겠습니다.';
  document.body.appendChild(successModal);
  setTimeout(() => successModal.remove(), 3000);
}
