const WHATSAPP = "5566992171483"; // troque pelo número real: 55 + DDD + número

// Impede agendamento em datas passadas
const campoData = document.getElementById("data");
const hoje = new Date().toISOString().split("T")[0];
campoData.min = hoje;

// Formata data (dd/mm) para a mensagem
function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}`;
}

// Monta a mensagem e abre o WhatsApp
document.getElementById("form-agendamento").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value;
  const data = formatarData(campoData.value);
  const hora = document.getElementById("hora").value;

  if (!nome || !data) {
    alert("Preencha o nome e a data.");
    return;
  }

  const mensagem =
    `Olá! Gostaria de agendar um horário.\n\n` +
    `👤 ${nome}\n` +
    `✂️ ${servico}\n` +
    `📅 ${data} às ${hora}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`, "_blank");
});
