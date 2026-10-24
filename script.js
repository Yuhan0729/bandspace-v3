const availableSlots = document.querySelectorAll(".available");

const bookingForm = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

const selectedTime = document.getElementById("selectedTime");
const confirmedBand = document.getElementById("confirmedBand");
const confirmedTime = document.getElementById("confirmedTime");

const nameInput = document.getElementById("nameInput");
const bandInput = document.getElementById("bandInput");

const confirmButton = document.getElementById("confirmButton");
const editButton = document.getElementById("editButton");
const cancelButton = document.getElementById("cancelButton");
const backButton = document.getElementById("backButton");

let currentStart = "";
let currentEnd = "";
let selectedSlot = null;


availableSlots.forEach(function (slot) {

  slot.addEventListener("click", function () {
    selectedSlot = slot;

    currentStart = slot.dataset.start;
    currentEnd = slot.dataset.end;

    selectedTime.textContent =
      currentStart + " - " + currentEnd;

    bookingForm.style.display = "block";
    confirmation.style.display = "none";

    bookingForm.scrollIntoView({
      behavior: "smooth"
    });

  });

});


confirmButton.addEventListener("click", function () {

  const name = nameInput.value;
  const band = bandInput.value;

  if (name === "" || band === "") {
    alert("Please fill in all fields.");
    return;
  }

  confirmedBand.textContent = band;

  confirmedTime.textContent =
    currentStart + " - " + currentEnd;

  selectedSlot.classList.remove("available");
  selectedSlot.classList.add("booked");

  selectedSlot.innerHTML = `
    <span>${currentStart} - ${currentEnd}</span>
    <span>BOOKED</span>
`;

  bookingForm.style.display = "none";
  confirmation.style.display = "block";

  confirmation.scrollIntoView({
    behavior: "smooth"
  });

});


editButton.addEventListener("click", function () {

  confirmation.style.display = "none";
  bookingForm.style.display = "block";

  selectedSlot.classList.remove("booked");
  selectedSlot.classList.add("available");

  selectedSlot.innerHTML = `
    <span>${currentStart} - ${currentEnd}</span>
    <span>AVAILABLE</span>
  `;

  bookingForm.scrollIntoView({
    behavior: "smooth"
  });

});


cancelButton.addEventListener("click", function () {

  confirmation.style.display = "none";

  selectedSlot.classList.remove("booked");
  selectedSlot.classList.add("available");

  selectedSlot.innerHTML = `
    <span>${currentStart} - ${currentEnd}</span>
    <span>AVAILABLE</span>
  `;

  nameInput.value = "";
  bandInput.value = "";

});


backButton.addEventListener("click", function () {

  confirmation.style.display = "none";

  nameInput.value = "";
  bandInput.value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});