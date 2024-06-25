import axios from "axios";

export const createOrderandPay = async (amount, productId, description) => {
    const { data: { key } } = await axios.get('https://paymentintegration.vercel.app/getKey');
    const { data: { order } } = await axios.post('https://paymentintegration.vercel.app/payment/v1/createOrder', {
        amount
    });

    var options = {
        "key": key,
        "amount": order.amount,
        "currency": "INR",
        "name": "Vinit",
        "description": description,
        "image": "https://avatars.githubusercontent.com/u/117593724?v=4",
        "order_id": order.id,
        "callback_url": `https://paymentintegration.vercel.app/payment/v1/paymentVerify?id=${productId}`,
        "prefill": {
            "name": "Vinit Patidar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var razor = new window.Razorpay(options);
    razor.open();
}