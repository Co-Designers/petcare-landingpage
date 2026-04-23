const translations = {
  es: {
    "head.title": "Petcare - Cuidado inteligente para su bienestar real",
    "nav.home": "Inicio",
    "nav.about": "Quiénes somos",
    "nav.benefits": "Beneficios",
    "nav.subscription": "Suscripción",
    "nav.contact": "Contacto",
    "hero.title": "BIENVENIDO A PETCARE",
    "hero.subtitle": "Cuidado inteligente para su bienestar real",
    "hero.btn": "SABER MÁS",
    "about.title": "¿Quiénes somos?",
    "about.description": "Somos PetCare, una plataforma de salud inteligente que une tecnología y bienestar. Nuestra prioridad es garantizar una vida plena para tus mascotas. Redefinimos la atención veterinaria para que la salud de tus compañeros nunca sea una incertidumbre, sino una garantía.",
    "benefits.title": "Beneficios",
    "benefits.card1.title": "Horarios personalizados",
    "benefits.card1.p1": "Localiza las mejores clínicas veterinarias cerca de ti.",
    "benefits.card1.p2": "Filtra por el tipo de atención que busques.",
    "benefits.card1.p3": "Consulta horarios y agenda citas médicas de manera inmediata desde nuestra plataforma.",
    "benefits.card2.title": "Recordatorios y Seguimiento",
    "benefits.card2.p1": "Nuestro sistema te notificará automáticamente",
    "benefits.card2.p2": "sobre próximas vacunas, desparasitaciones y controles preventivos.",
    "benefits.card2.p3": "Te ayudamos a mantener un cuidado constante para tus compañeros.",
    "benefits.card3.title": "Historial clínico en línea",
    "benefits.card3.p1": "Toda la información médica de tu mascota en un solo lugar.",
    "benefits.card3.p2": "No te preocupes por perder documentos médicos.",
    "benefits.card3.p3": "Accede de forma rápida y organizada a registros de vacunas, cirugías y antecedentes.",
    "plans.title": "Suscripciones",
    "plans.premium.name": "Plan Premium",
    "plans.premium.item1": "Acceso a descuentos",
    "plans.premium.item2": "Expediente clínico digital",
    "plans.premium.item3": "Recordatorios de vacunas y citas.",
    "plans.premium.item4": "Buscador de veterinarias cercanas.",
    "plans.premium.item5": "Almacenamiento de documentos y placas.",
    "plans.health.name": "Plan Salud",
    "plans.health.item1": "Todo lo del Plan Premium.",
    "plans.health.item2": "Cobertura de emergencias.",
    "plans.health.item3": "Chat de orientación veterinaria.",
    "plans.health.item4": "Registro de múltiples mascotas.",
    "plans.health.item5": "Descuentos en farmacias veterinarias.",
    "plans.btn": "Elegir Plan",
    "contact.title": "Sé parte de nosotros",
    "contact.name": "Nombres",
    "contact.lastname": "Apellidos",
    "contact.email": "Correo",
    "contact.phone": "Teléfono",
    "contact.btn": "Registrarme",
    "footer.text": "© PetCare 2026. Todos los derechos reservados."
  },
  en: {
    "head.title": "Petcare - Intelligent care for real wellbeing",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.benefits": "Benefits",
    "nav.subscription": "Subscription",
    "nav.contact": "Contact",
    "hero.title": "WELCOME TO PETCARE",
    "hero.subtitle": "Intelligent care for real wellbeing",
    "hero.btn": "LEARN MORE",
    "about.title": "About Us",
    "about.description": "We are PetCare, an intelligent health platform that unites technology and wellbeing. Our priority is to guarantee a full life for your pets. We redefine veterinary care so that your companions' health is never an uncertainty, but a guarantee.",
    "benefits.title": "Benefits",
    "benefits.card1.title": "Personalized Schedules",
    "benefits.card1.p1": "Locate the best veterinary clinics near you.",
    "benefits.card1.p2": "Filter by the type of care you are looking for.",
    "benefits.card1.p3": "Check schedules and book medical appointments immediately from our platform.",
    "benefits.card2.title": "Reminders and Tracking",
    "benefits.card2.p1": "Our system will automatically notify you",
    "benefits.card2.p2": "about upcoming vaccinations, deworming and preventive checks.",
    "benefits.card2.p3": "We help you maintain constant care for your companions.",
    "benefits.card3.title": "Online Medical Records",
    "benefits.card3.p1": "All your pet's medical information in one place.",
    "benefits.card3.p2": "Don't worry about losing medical documents.",
    "benefits.card3.p3": "Quickly and organized access to vaccine records, surgeries, and history.",
    "plans.title": "Subscriptions",
    "plans.premium.name": "Premium Plan",
    "plans.premium.item1": "Access to discounts",
    "plans.premium.item2": "Digital medical record",
    "plans.premium.item3": "Vaccine and appointment reminders.",
    "plans.premium.item4": "Nearby veterinary search.",
    "plans.premium.item5": "Document and X-ray storage.",
    "plans.health.name": "Health Plan",
    "plans.health.item1": "Everything in Premium Plan.",
    "plans.health.item2": "Emergency coverage.",
    "plans.health.item3": "Veterinary guidance chat.",
    "plans.health.item4": "Multi-pet registration.",
    "plans.health.item5": "Discounts at veterinary pharmacies.",
    "plans.btn": "Choose Plan",
    "contact.title": "Be part of us",
    "contact.name": "First Name",
    "contact.lastname": "Last Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.btn": "Register",
    "footer.text": "© PetCare 2026. All rights reserved."
  }
};

/**
 * @param {string} lang */
function changeLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'LABEL') {
        el.innerText = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'es';
  changeLanguage(savedLang);
});