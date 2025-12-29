import nodemailer from "nodemailer";

/* ================================
   🔐 Create SMTP Transporter
================================ */
const getTransporter = () => {
  const { MAIL_USER, MAIL_PASS } = process.env;

  if (!MAIL_USER || !MAIL_PASS) {
    throw new Error("❌ Email credentials missing in environment variables");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS, // Gmail App Password
    },
  });
};

/* ================================
   📦 ORDER CONFIRMATION EMAIL
================================ */
export const sendOrderEmail = async (order, product) => {
  try {
    const transporter = getTransporter();

    const text = `
🎉 Order Confirmed – Vagmi Art Wear

Product: ${product.name}
Size: ${order.customer.size}

👤 Customer Details
Name: ${order.customer.name}
Phone: ${order.customer.phone}
Email: ${order.customer.email}

📍 Address
${order.customer.address}
Pincode: ${order.customer.pincode}

💳 Payment ID
${order.paymentId}

Thank you for supporting handcrafted art 🌸
— Vagmi Art Wear
`;

    await transporter.sendMail({
      from: `"Vagmi Art Wear" <${process.env.MAIL_USER}>`,
      to: `${order.customer.email}, ${process.env.ADMIN_EMAIL}`,
      subject: "Your Vagmi Order is Confirmed 🎉",
      text,
    });
  } catch (error) {
    console.error("❌ Order email failed:", error.message);
    throw error;
  }
};

