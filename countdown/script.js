const endDate = new Date('2023-12-31T23:59:59');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = endDate - currentDate;

  // Date
  if (timeDifference <= 0) {
    document.getElementById('countdown').textContent = 'Contagem regressiva encerrada';
    return;
  }

  // Math
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update html
  document.getElementById('countdown').textContent = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

  // Call the function 1 second
  setTimeout(updateCountdown, 1000);
}

// Start Countdown
updateCountdown();
