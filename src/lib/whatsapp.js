export const WHATSAPP_NUMBER = "919XXXXXXXXX"; // Replace with actual number e.g. 919876543210

export const openWhatsApp = (productName = null) => {
  const message = productName
    ? `Hi Easyva, I am interested in the ${productName}. Tell me more about the Easyva experience.`
    : `Hi Easyva, I would like to know more about your premium home & lifestyle products.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};