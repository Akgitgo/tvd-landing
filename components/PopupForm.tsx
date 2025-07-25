let isPopupVisible = false;
let popupTimer: number | undefined;

export function PopupForm(): string {
  return `
    <div id="popup-form" class="popup-form" style="display: none;">
      <div class="popup-content">
        <button id="close-popup" class="close-btn" type="button">&times;</button>
        <h2 class="popup-title">Want to know more about our products? Get free consultation</h2>
        <form id="popup-form-form">
          <input type="text" id="popup-name" name="name" placeholder="Your Name" required />
          <input type="tel" id="popup-phone" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" maxlength="10" />
          <input type="text" id="popup-city" name="city" placeholder="Your City/Location" required />
          <button type="submit" id="popup-submit">Submit</button>
        </form>
        <div id="popup-success" class="popup-success" style="display:none;">We will get back to you soon ✅</div>
      </div>
    </div>
  `;
}

export function showPopup(): void {
  const popup = document.getElementById('popup-form');
  if (popup) popup.style.display = 'flex';
  isPopupVisible = true;
}

export function hidePopup(): void {
  const popup = document.getElementById('popup-form');
  if (popup) popup.style.display = 'none';
  isPopupVisible = false;
  // If not submitted, restart timer to show popup again after 8 seconds
  if (!hasPopupSubmitted()) {
    if (popupTimer) clearTimeout(popupTimer);
    popupTimer = window.setTimeout(() => {
      showPopup();
    }, 8000);
  }
}

function setPopupSubmitted(): void {
  localStorage.setItem('popupFormSubmitted', 'true');
}

function hasPopupSubmitted(): boolean {
  return localStorage.getItem('popupFormSubmitted') === 'true';
}

export function setupPopupListeners(): void {
  // Always set up the timer on page load (including refresh)
  if (!hasPopupSubmitted()) {
    if (popupTimer) clearTimeout(popupTimer);
    popupTimer = window.setTimeout(() => {
      showPopup();
    }, 8000);
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target && target.id === 'close-popup') {
      hidePopup();
    }
  });

  document.addEventListener('submit', async (e) => {
    const form = e.target as HTMLFormElement;
    if (form && form.id === 'popup-form-form') {
      e.preventDefault();
      const name = (document.getElementById('popup-name') as HTMLInputElement).value.trim();
      const phone = (document.getElementById('popup-phone') as HTMLInputElement).value.trim();
      const city = (document.getElementById('popup-city') as HTMLInputElement).value.trim();
      const submitBtn = document.getElementById('popup-submit') as HTMLButtonElement;
      const successMsg = document.getElementById('popup-success') as HTMLElement;
      if (!name || !phone || !city) return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Fetching details 🔃';
      // Send to Google Sheets API (form-encoded, no CORS preflight)
      try {
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('city', city);
        await fetch('https://script.google.com/macros/s/AKfycbyEOKE-d78a95JiaKxRud_vLVhm-9JeaX_d1Y-pvIt8itYWccj1cOGEOT5t9KBWL8aV/exec', {
          method: 'POST',
          body: formData
        });
        setPopupSubmitted();
        if (successMsg) successMsg.style.display = 'block';
        form.style.display = 'none';
        setTimeout(() => {
          hidePopup();
        }, 2000);
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
        alert('There was an error. Please try again.');
      }
    }
  });
} 