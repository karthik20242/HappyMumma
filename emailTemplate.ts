/**
 * Generates a beautiful, highly professional, responsive HTML email template
 * for website administrators when a customer successfully places an order.
 */
export function generateHtmlEmail(orderData: {
  orderId: string;
  orderDate: string;
  customerName: string;
  customerEmail: string;
  phone: string;
  address: string;
  preferredDeliveryDate?: string;
  preferredDeliveryTime?: string;
  paymentMethod: string;
  paymentStatus: string;
  transactionId: string;
  items: Array<{
    id?: string | number;
    name: string;
    price: number;
    quantity: number;
    subtotal?: number;
  }>;
  totalPrice: number;
  fulfillmentType?: string;
  locationDetails?: string;
}): string {
  const {
    orderId,
    orderDate,
    customerName,
    customerEmail,
    phone,
    address,
    preferredDeliveryDate,
    preferredDeliveryTime,
    paymentMethod,
    paymentStatus,
    transactionId,
    items,
    totalPrice,
    fulfillmentType = "Doorstep Delivery",
    locationDetails,
  } = orderData;

  // Compute values
  const formattedDate = orderDate || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const subtotal = totalPrice;
  const shippingCharges = "FREE";
  const taxes = "Included";
  const discount = "₹0";

  // Generate table rows for ordered products
  const itemsHtml = items
    .map(
      (item) => {
        const itemPrice = Number(item.price) || 0;
        const itemQty = Number(item.quantity) || 1;
        const itemSubtotal = Number(item.subtotal) || (itemPrice * itemQty);
        return `
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 12px 0; text-align: left; color: #1e293b; font-size: 14px; font-weight: 600;">
        <span style="font-size: 15px;">🍲</span> ${item.name}
      </td>
      <td style="padding: 12px 0; text-align: center; color: #64748b; font-size: 14px; font-weight: 700;">
        × ${itemQty}
      </td>
      <td style="padding: 12px 0; text-align: right; color: #64748b; font-size: 14px;">
        ₹${itemPrice}
      </td>
      <td style="padding: 12px 0; text-align: right; color: #1e293b; font-size: 14px; font-weight: 700;">
        ₹${itemSubtotal}
      </td>
    </tr>
  `;
      }
    )
    .join("");

  const finalLocation = locationDetails || address;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Food Order Received #${orderId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; width: 100% !important;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; padding: 24px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" maxWidth="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- BRAND HEADER -->
          <tr>
            <td align="center" style="background-color: #dc2626; padding: 28px 24px; text-align: center;">
              <span style="font-size: 36px; display: block; margin-bottom: 6px;">🍲</span>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Happy Mumma Order</h1>
              <p style="color: #fecaca; margin: 6px 0 0 0; font-size: 14px; font-weight: 600;">Order ID: <strong style="color: #ffffff;">#${orderId}</strong></p>
            </td>
          </tr>

          <!-- ORDER QUICK FACTS -->
          <tr>
            <td style="padding: 20px 24px 10px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; border-radius: 12px; padding: 14px 16px;">
                <tr>
                  <td width="50%" style="padding: 5px 0; font-size: 13px; color: #475569; font-weight: 600;">Order Date & Time:</td>
                  <td width="50%" align="right" style="padding: 5px 0; font-size: 13px; color: #1e293b; font-weight: 700;">${formattedDate}</td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 5px 0; font-size: 13px; color: #475569; font-weight: 600;">Payment Method:</td>
                  <td width="50%" align="right" style="padding: 5px 0; font-size: 13px; color: #dc2626; font-weight: 700; text-transform: uppercase;">${paymentMethod}</td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 5px 0; font-size: 13px; color: #475569; font-weight: 600;">Payment Status:</td>
                  <td width="50%" align="right" style="padding: 5px 0; font-size: 13px; color: #15803d; font-weight: 700; text-transform: uppercase;">${paymentStatus}</td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 5px 0; font-size: 13px; color: #475569; font-weight: 600;">Transaction / UTR Ref:</td>
                  <td width="50%" align="right" style="padding: 5px 0; font-size: 12px; color: #1e293b; font-family: monospace; font-weight: 700;">${transactionId}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CUSTOMER METADATA -->
          <tr>
            <td style="padding: 10px 24px;">
              <h3 style="margin: 0 0 10px 0; color: #0f172a; font-size: 15px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">👤 Customer & Fulfillment Information</h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 14px; line-height: 1.5; color: #334155;">
                <tr>
                  <td style="padding: 4px 0; font-weight: 600; color: #475569;" width="35%">Customer Name:</td>
                  <td style="padding: 4px 0; color: #0f172a; font-weight: 700;">${customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-weight: 600; color: #475569;">Phone Number:</td>
                  <td style="padding: 4px 0; color: #0f172a; font-weight: 700;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-weight: 600; color: #475569;">Customer Email:</td>
                  <td style="padding: 4px 0; color: #3b82f6; font-weight: 600;">${customerEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-weight: 600; color: #475569;">Fulfillment Type:</td>
                  <td style="padding: 4px 0; color: #b91c1c; font-weight: 700;">${fulfillmentType}</td>
                </tr>
                ${preferredDeliveryDate || preferredDeliveryTime ? `
                <tr>
                  <td style="padding: 4px 0; font-weight: 600; color: #475569;">Requested Schedule:</td>
                  <td style="padding: 4px 0; color: #16a34a; font-weight: 700;">
                    ${preferredDeliveryDate || 'Earliest'} • ${preferredDeliveryTime || 'Standard Slot'}
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 6px 0 4px 0; font-weight: 600; color: #475569; vertical-align: top;">Delivery / Pickup Details:</td>
                  <td style="padding: 6px 0 4px 0; color: #0f172a; font-weight: 600; line-height: 1.4;">
                    <span style="color: #1e293b;">${finalLocation}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ITEMS TABLE -->
          <tr>
            <td style="padding: 12px 24px;">
              <h3 style="margin: 0 0 8px 0; color: #0f172a; font-size: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">🛒 Ordered Products</h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <thead>
                  <tr style="border-bottom: 2px solid #e2e8f0;">
                    <th align="left" style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 800;">Item</th>
                    <th align="center" style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 800;">Qty</th>
                    <th align="right" style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 800;">Unit Price</th>
                    <th align="right" style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 800;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- SUMMARY CALCULATOR -->
          <tr>
            <td style="padding: 12px 24px 32px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 2px solid #f1f5f9; padding-top: 16px;">
                <tr>
                  <td width="60%" style="padding: 4px 0; font-size: 14px; color: #64748b; font-weight: 500;">Subtotal:</td>
                  <td width="40%" align="right" style="padding: 4px 0; font-size: 14px; color: #1e293b; font-weight: 600;">₹${subtotal}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 14px; color: #64748b; font-weight: 500;">Shipping Charges:</td>
                  <td align="right" style="padding: 4px 0; font-size: 14px; color: #16a34a; font-weight: 700;">${shippingCharges}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 14px; color: #64748b; font-weight: 500;">Taxes & GST:</td>
                  <td align="right" style="padding: 4px 0; font-size: 14px; color: #64748b; font-weight: 600;">${taxes}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 14px; color: #64748b; font-weight: 500;">Discounts:</td>
                  <td align="right" style="padding: 4px 0; font-size: 14px; color: #1e293b; font-weight: 600;">${discount}</td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 16px 0 0 0; font-size: 18px; color: #0f172a; font-weight: 900;">Grand Total:</td>
                  <td align="right" style="padding: 16px 0 0 0; font-size: 22px; color: #dc2626; font-weight: 900;">₹${totalPrice}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- EMAIL FOOTER -->
          <tr>
            <td align="center" style="background-color: #f8fafc; border-top: 1px solid #edf2f7; padding: 24px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: 600; line-height: 1.5;">
                This notification is automatically generated by Happy Mumma Kitchen Order Dispatcher.
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #94a3b8;">
                &copy; 2026 Happy Mumma Kitchen. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
