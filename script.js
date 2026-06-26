const CONTACT = {
  studioName: "AM Digital Solutions",
  email: "antonymugo66@gmail.com",
  whatsapp: "254793505248"
};

const form = document.querySelector("#contact-form");
const toast = document.querySelector("#toast");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2700);
}

function enquiryText() {
  const data = Object.fromEntries(new FormData(form).entries());
  return [
    `PROJECT ENQUIRY - ${CONTACT.studioName}`,
    "",
    `Name: ${data.name || "Not provided"}`,
    `Email: ${data.email || "Not provided"}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Project type: ${data.projectType || "Not specified"}`,
    "",
    "Project details:",
    data.message || "Not provided"
  ].join("\n");
}

function validateContactForm() {
  if (!form.checkValidity()) {
    form.reportValidity();
    showToast("Please fill in the required fields.");
    return false;
  }
  return true;
}

if (form) {
  document.querySelector("#send-whatsapp").addEventListener("click", () => {
    if (!validateContactForm()) return;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(enquiryText())}`, "_blank", "noopener,noreferrer");
  });

  document.querySelector("#send-email").addEventListener("click", () => {
    if (!validateContactForm()) return;
    const name = form.elements.name.value || "New client";
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Project enquiry - ${name}`)}&body=${encodeURIComponent(enquiryText())}`;
  });
}

const footerEmail = document.querySelector("#footer-email");
if (footerEmail) footerEmail.textContent = CONTACT.email;

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
