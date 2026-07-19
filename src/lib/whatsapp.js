export const WHATSAPP_NUMBER = "919342879701"; // Replace with actual number e.g. 919876543210

export const openWhatsApp = (productName = null) => {
  const message = productName
    ? `Hi Easyva, I am interested in the ${productName}. Please share price, availability and delivery details.`
    : `Hi Easyva, I would like to know more about your home and kitchen, home decor, art and craft, and embroidery kit products.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
