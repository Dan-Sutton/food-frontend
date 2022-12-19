import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["GB"],
        },
        allow_promotion_codes: true,
        shipping_options: [{ shipping_rate: "shr_1MFhfkH0fUSt37v318qJmWvv" }],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "gbp",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 0,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
