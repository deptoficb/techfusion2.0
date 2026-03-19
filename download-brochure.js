// This script handles the brochure download and shows a message when done
function downloadBrochure() {
  // Replace with your actual brochure file path
  const brochureUrl = './TECHFUSION_BROCHURE.pdf';
  const link = document.createElement('a');
  link.href = brochureUrl;
  link.download = 'TechFusion2.0_Brochure.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showDownloadMessage();
}

function showDownloadMessage() {
  let msg = document.getElementById('download-msg');
  if (!msg) {
    msg = document.createElement('div');
    msg.id = 'download-msg';
    msg.style.position = 'fixed';
    msg.style.bottom = '32px';
    msg.style.left = '50%';
    msg.style.transform = 'translateX(-50%)';
    msg.style.background = 'var(--grad)';
    msg.style.color = '#fff';
    msg.style.padding = '14px 32px';
    msg.style.borderRadius = '4px';
    msg.style.fontFamily = 'var(--font-display)';
    msg.style.fontWeight = '700';
    msg.style.fontSize = '1rem';
    msg.style.boxShadow = '0 4px 24px rgba(0,229,255,.18)';
    msg.style.zIndex = '99999';
    document.body.appendChild(msg);
  }
  msg.textContent = 'Brochure downloaded!';
  msg.style.opacity = '1';
  setTimeout(() => {
    msg.style.transition = 'opacity .7s';
    msg.style.opacity = '0';
  }, 2200);
}
