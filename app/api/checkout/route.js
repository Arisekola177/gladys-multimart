
import { NextResponse } from 'next/server';
import Paystack from 'react-paystack';

export const POST = async (NextRequest) => {
  try {
    const reqBody = await NextRequest.json();
    const { items, email } = reqBody;

    const extractingItems = items.map((item) => ({
      quantity: item.quantity,
      amount: item.price * 100, // amount in kobo
      name: item.title,
      description: item.description,
      currency: 'NGN',
    }));

    const totalAmount = items.reduce((total, item) => total + item.price * 100 * item.quantity, 0);

    const paystack = new Paystack({
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY, // Ensure the correct key is used
      email: email,
      amount: totalAmount,
      reference: 'unique_reference', // replace with a unique reference
      channels: ['card'],
      metadata: {
        custom_fields: [
          {
            display_name: 'Email',
            variable_name: 'email',
            value: email,
          },
        ],
      },
    });

    const paymentLink = await paystack.initializePayment();

    return NextResponse.json({
      message: 'Connection is Active!',
      success: true,
      paymentLink,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    }, { status: 500 });
  }
};



