let isPopupVisible = false;
let popupTimer: number | undefined;
let isFirstPopupShown = false;

export function PopupForm(): string {
  return `
    <div id="popup-form" class="popup-form" style="display: none;">
      <div class="popup-content">
        <button id="close-popup" class="close-btn" type="button">&times;</button>
        <h2 class="popup-title">Want to know more about our cars and prices?</h2>
        <form id="popup-form-form">
          <input type="text" id="popup-name" name="name" placeholder="Your Name" required />
          <input type="tel" id="popup-phone" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" maxlength="10" />
          <input type="text" id="popup-city" name="city" placeholder="Your City/Location" required />
          <select id="popup-car-interest" name="interestedCar" required>
            <option value="" disabled selected>Which car you are interested in?</option>
            <option value="MG">MG</option>
            <option value="Non MG">Non MG</option>
          </select>
          <button type="submit" id="popup-submit">Submit</button>
        </form>
        <div id="popup-success" class="popup-success" style="display:none;">We will get back to you soon ✅</div>
      </div>
    </div>
  `;
}

export function showPopup(): void {
  console.log('showPopup called');
  const popup = document.getElementById('popup-form');
  if (popup) {
    popup.style.display = 'flex';
    console.log('Popup should be visible now');
  } else {
    console.error('Popup element not found!');
  }
  isPopupVisible = true;
}

export function hidePopup(): void {
  console.log('hidePopup called');
  const popup = document.getElementById('popup-form');
  if (popup) popup.style.display = 'none';
  isPopupVisible = false;
  
  // If not submitted, restart timer to show popup again after 8 seconds
  if (!hasPopupSubmitted()) {
    console.log('Setting up 8-second timer for next popup');
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

// Function to clear popup submission status for testing
export function clearPopupSubmission(): void {
  localStorage.removeItem('popupFormSubmitted');
  console.log('Popup submission status cleared');
}

export function setupPopupListeners(): void {
  console.log('setupPopupListeners called');
  console.log('hasPopupSubmitted:', hasPopupSubmitted());
  
  // Show first popup after 3 seconds if not submitted
  if (!hasPopupSubmitted()) {
    console.log('Setting up 3-second timer for first popup');
    if (popupTimer) clearTimeout(popupTimer);
    popupTimer = window.setTimeout(() => {
      console.log('3-second timer fired, showing popup');
      showPopup();
      isFirstPopupShown = true;
    }, 3000);
  } else {
    console.log('Popup already submitted, not showing');
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target && target.id === 'close-popup') {
      hidePopup();
    }
  });

  // Handle dropdown placeholder behavior
  const carInterestSelect = document.getElementById('popup-car-interest') as HTMLSelectElement;
  if (carInterestSelect) {
    carInterestSelect.addEventListener('change', (e) => {
      const select = e.target as HTMLSelectElement;
      if (select.value === '') {
        select.style.color = '#bbb';
      } else {
        select.style.color = '#fff';
      }
    });
  }

  document.addEventListener('submit', async (e) => {
    const form = e.target as HTMLFormElement;
    if (form && form.id === 'popup-form-form') {
      e.preventDefault();
      const name = (document.getElementById('popup-name') as HTMLInputElement).value.trim();
      const phone = (document.getElementById('popup-phone') as HTMLInputElement).value.trim();
      const city = (document.getElementById('popup-city') as HTMLInputElement).value.trim();
      const interestedCar = (document.getElementById('popup-car-interest') as HTMLSelectElement).value.trim();
      const submitBtn = document.getElementById('popup-submit') as HTMLButtonElement;
      const successMsg = document.getElementById('popup-success') as HTMLElement;
      if (!name || !phone || !city || !interestedCar || interestedCar === "") return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Fetching details 🔃';
      // Send to Google Sheets API (form-encoded, no CORS preflight)
      try {
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('city', city);
        formData.append('interestedCar', interestedCar);
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