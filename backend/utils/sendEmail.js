import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOrderEmail = async (order, product) => {
  try {
    await resend.emails.send({
      from: "Vagmi Art Wear <orders@resend.dev>",
      to: [
        order.customer.email,
        process.env.ADMIN_EMAIL
      ],
      subject: "Your Vagmi Order is Confirmed 🌸",
      html: `
        <h2>🎉 Order Confirmed – Vagmi Art Wear</h2>

        <p><strong>Product:</strong> ${product.name}</p>
        <p><strong>Size:</strong> ${order.customer.size}</p>

        <h3>👤 Customer Details</h3>
        <p>
          ${order.customer.name}<br/>
          ${order.customer.phone}<br/>
          ${order.customer.email}
        </p>

        <h3>📍 Address</h3>
        <p>
          ${order.customer.address}<br/>
          Pincode: ${order.customer.pincode}
        </p>

        <p><strong>Payment ID:</strong> ${order.paymentId}</p>

        <p>Thank you for supporting handcrafted art 🌸</p>
        <p><strong>— Vagmi Art Wear</strong></p>
      `,
    });

    console.log("✅ Order email sent");
  } catch (err) {
    console.error("❌ Order email failed:", err);
  }
};
