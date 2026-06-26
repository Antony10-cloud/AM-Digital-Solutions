const CONFIG = {
  studioName: "AM Digital Solutions",
  email: "antonymugo66@gmail.com",
  whatsapp: "254793505248",
  currency: "KSh",
  projectTypes: [
    { id: "website", icon: "01", name: "Website development", description: "Landing pages, business sites, portfolios, and e-commerce websites", price: 35000 },
    { id: "mobile", icon: "02", name: "Mobile application development", description: "Android-first and cross-platform app experiences", price: 120000 }
  ],
  features: [
    { id: "cms", name: "Easy content editing", description: "Update pages without code", price: 15000 },
    { id: "commerce", name: "Online payments", description: "Sell products or services", price: 35000 },
    { id: "booking", name: "Booking system", description: "Let clients reserve a time", price: 20000 },
    { id: "blog", name: "Blog / insights", description: "Publish useful content", price: 12000 },
    { id: "forms", name: "Advanced forms", description: "Applications, enquiries, or onboarding", price: 10000 },
    { id: "chat", name: "WhatsApp / live chat", description: "Make contact effortless", price: 5000 },
    { id: "seo", name: "SEO foundation", description: "Help search engines understand you", price: 18000 },
    { id: "analytics", name: "Analytics setup", description: "Understand visits and conversions", price: 8000 },
    { id: "multilingual", name: "Multiple languages", description: "Reach more audiences", price: 25000 },
    { id: "auth", name: "User accounts", description: "Login, profiles, and protected areas", price: 25000 },
    { id: "dashboard", name: "Admin dashboard", description: "Manage users, orders, content, or records", price: 30000 },
    { id: "notifications", name: "App notifications", description: "Email, SMS, or push notification flows", price: 20000 }
  ],
  budgets: ["Below KSh 50,000", "KSh 50,000 - 100,000", "KSh 100,000 - 200,000", "KSh 200,000+"]
};

const form = document.querySelector("#project-form");
const panels = [...document.querySelectorAll(".form-panel")];
const steps = [...document.querySelectorAll(".step")];
const nextButton = document.querySelector("#next-button");
const backButton = document.querySelector("#back-button");
const estimateElement = document.querySelector("#estimate");
const summaryElement = document.querySelector("#summary");
const toast = document.querySelector("#toast");
let currentStep = 1;

function money(value) {
  return `${CONFIG.currency} ${value.toLocaleString("en-KE")}`;
}

function renderOptions() {
  document.querySelector("#website-types").innerHTML = CONFIG.projectTypes.map((item) => `
    <label class="choice-card">
      <input type="radio" name="websiteType" value="${item.id}" required>
      <span><i>${item.icon}</i><strong>${item.name}</strong><small>${item.description} - from ${money(item.price)}</small></span>
    </label>`).join("");

  document.querySelector("#features").innerHTML = CONFIG.features.map((item) => `
    <label class="feature-card">
      <input type="checkbox" name="features" value="${item.id}">
      <span><i class="check">✓</i><strong>${item.name}</strong><small>${item.description} - +${money(item.price)}</small></span>
    </label>`).join("");

  document.querySelector("#budgets").innerHTML = CONFIG.budgets.map((budget, index) => `
    <label class="budget-card">
      <input type="radio" name="budget" value="${budget}" ${index === 0 ? "required" : ""}>
      <span><b>${budget}</b><small>○</small></span>
    </label>`).join("");
}

function calculateEstimate() {
  const typeId = form.elements.websiteType?.value;
  const type = CONFIG.projectTypes.find((item) => item.id === typeId);
  const selectedFeatures = [...form.querySelectorAll('input[name="features"]:checked')];
  return (type?.price || 0) + selectedFeatures.reduce((total, input) => {
    return total + (CONFIG.features.find((item) => item.id === input.value)?.price || 0);
  }, 0);
}

function updateEstimate() {
  const total = calculateEstimate();
  estimateElement.textContent = total ? `From ${money(total)}` : "Select a project type";
}

function formDataObject() {
  const data = Object.fromEntries(new FormData(form).entries());
  data.features = [...form.querySelectorAll('input[name="features"]:checked')].map((input) => input.value);
  return data;
}

function selectedNames(data) {
  const type = CONFIG.projectTypes.find((item) => item.id === data.websiteType)?.name || "Not selected";
  const features = data.features.map((id) => CONFIG.features.find((item) => item.id === id)?.name).filter(Boolean);
  const files = [...document.querySelector("#brand-files").files].map((file) => file.name);
  return { type, features, files };
}

function summaryText() {
  const data = formDataObject();
  const selected = selectedNames(data);
  const estimate = calculateEstimate();
  return [
    `DIGITAL PROJECT ENQUIRY - ${CONFIG.studioName}`,
    "",
    `Client: ${data.name || "Not provided"}`,
    `Business: ${data.business || "Not provided"}`,
    `Email: ${data.email || "Not provided"}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Business overview: ${data.industry || "Not provided"}`,
    `Current website / profile: ${data.existingSite || "None"}`,
    "",
    `Project type: ${selected.type}`,
    `Project goal: ${data.projectGoal || "Not provided"}`,
    `Features: ${selected.features.join(", ") || "None selected"}`,
    `Other features: ${data.otherFeatures || "None"}`,
    "",
    `Budget: ${data.budget || "Not provided"}`,
    `Preferred launch: ${data.deadline || "Not set"} (${data.timeline || "Flexible"})`,
    `Indicative estimate: ${estimate ? `From ${money(estimate)}` : "To be discussed"}`,
    `Notes: ${data.notes || "None"}`,
    `Files to attach: ${selected.files.join(", ") || "None"}`,
    "",
    "This automated estimate is a planning guide. Final pricing follows a scope review."
  ].join("\n");
}

function renderSummary() {
  const data = formDataObject();
  const selected = selectedNames(data);
  const estimate = calculateEstimate();
  const safe = (value) => String(value || "Not provided").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  summaryElement.innerHTML = `
    <div class="summary-head"><div><small>Prepared for</small><b>${safe(data.business || data.name)}</b></div><div><small>Indicative estimate</small><strong>${estimate ? `From ${money(estimate)}` : "TBC"}</strong></div></div>
    <div class="summary-grid">
      <div class="summary-item"><small>Project type</small><span>${safe(selected.type)}</span></div>
      <div class="summary-item"><small>Budget</small><span>${safe(data.budget)}</span></div>
      <div class="summary-item wide"><small>Selected features</small><span>${safe(selected.features.join(", ") || "None selected")}</span></div>
      <div class="summary-item wide"><small>Primary goal</small><span>${safe(data.projectGoal)}</span></div>
      <div class="summary-item"><small>Preferred launch</small><span>${safe(data.deadline || "Not set")} - ${safe(data.timeline)}</span></div>
      <div class="summary-item"><small>Contact</small><span>${safe(data.name)} - ${safe(data.email)}</span></div>
      <div class="summary-item wide"><small>Files selected</small><span>${safe(selected.files.join(", ") || "None")}</span></div>
    </div>`;
}

function validateStep(step) {
  const panel = panels[step - 1];
  const required = [...panel.querySelectorAll("[required]")];
  let valid = true;
  required.forEach((field) => {
    const fieldValid = field.type === "radio"
      ? Boolean(form.querySelector(`input[name="${field.name}"]:checked`))
      : field.checkValidity();
    field.setAttribute("aria-invalid", String(!fieldValid));
    if (!fieldValid) valid = false;
  });
  if (!valid) showToast("Please complete the required fields before continuing.");
  return valid;
}

function goToStep(step) {
  currentStep = Math.max(1, Math.min(5, step));
  panels.forEach((panel) => panel.classList.toggle("is-active", Number(panel.dataset.step) === currentStep));
  steps.forEach((item, index) => {
    item.classList.toggle("is-active", index + 1 === currentStep);
    item.classList.toggle("is-complete", index + 1 < currentStep);
  });
  backButton.disabled = currentStep === 1;
  nextButton.style.display = currentStep === 5 ? "none" : "inline-flex";
  if (currentStep === 5) renderSummary();
  document.querySelector("#planner").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2700);
}

function saveDraft() {
  const data = formDataObject();
  delete data.brandFiles;
  localStorage.setItem("am-digital-solutions-brief", JSON.stringify(data));
}

function restoreDraft() {
  const raw = localStorage.getItem("am-digital-solutions-brief");
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    Object.entries(data).forEach(([name, value]) => {
      if (name === "features") {
        value.forEach((id) => {
          const input = form.querySelector(`input[name="features"][value="${id}"]`);
          if (input) input.checked = true;
        });
      } else {
        const fields = form.querySelectorAll(`[name="${name}"]`);
        fields.forEach((field) => {
          if (field.type === "radio") field.checked = field.value === value;
          else if (field.type !== "file" && field.type !== "checkbox") field.value = value;
        });
      }
    });
    updateEstimate();
  } catch {
    localStorage.removeItem("am-digital-solutions-brief");
  }
}

nextButton.addEventListener("click", () => { if (validateStep(currentStep)) goToStep(currentStep + 1); });
backButton.addEventListener("click", () => goToStep(currentStep - 1));
steps.forEach((step, index) => step.addEventListener("click", () => {
  if (index + 1 <= currentStep || validateStep(currentStep)) goToStep(index + 1);
}));
form.addEventListener("input", (event) => {
  event.target.removeAttribute("aria-invalid");
  updateEstimate();
  saveDraft();
});
document.querySelector("#brand-files").addEventListener("change", (event) => {
  const files = [...event.target.files];
  const oversized = files.filter((file) => file.size > 10 * 1024 * 1024);
  document.querySelector("#file-list").innerHTML = files.map((file) => `<span class="file-chip">${file.name} - ${(file.size / 1024 / 1024).toFixed(1)} MB</span>`).join("");
  if (oversized.length) showToast("One or more files are over 10 MB. Consider sending a cloud link instead.");
});

document.querySelector("#send-whatsapp").addEventListener("click", () => {
  if (!validateStep(5)) return;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(summaryText())}`, "_blank", "noopener,noreferrer");
});
document.querySelector("#send-email").addEventListener("click", () => {
  if (!validateStep(5)) return;
  const business = form.elements.business.value || "New client";
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(`Digital project enquiry - ${business}`)}&body=${encodeURIComponent(summaryText())}`;
});
document.querySelector("#copy-summary").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(summaryText()); showToast("Project summary copied."); }
  catch { showToast("Copy was blocked. Please use the email option instead."); }
});

renderOptions();
restoreDraft();
updateEstimate();
document.querySelector("#footer-email").textContent = CONFIG.email;
document.querySelector("#year").textContent = new Date().getFullYear();
