let isSubmitting = false;

document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  if (isSubmitting) return;
  isSubmitting = true;

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim().toLowerCase();

  if (username === 'ambulatorio' && password === 'ambulatorio') {
    const powerBIUrl = "https://app.powerbi.com/view?r=eyJrIjoiMTVhMThhZGYtYTAxNi00NGNhLWExNTItZmRkMjQ5NTA0NDMyIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS08M2Q1LTE5MGE2Y2MwMTM2NSJ9";

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwVOSZnHUeKfRUyxy66QGegekodo8H4Hsf1efk2awz2w7ZCCjTmT8hSww2HEJ4cJOMZ6Q/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ setor: "Fisioterapia" })
      });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }

    // Redirecionamento via link invisível (para evitar alteração da URL)
    const link = document.getElementById('redirectLink');
    link.href = powerBIUrl;
    link.click();

  } else {
    document.getElementById('error-message').style.display = "block";
    isSubmitting = false;
  }
});
