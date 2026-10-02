// Paddle checkout for DeTars credits.
//
// Flow: the DeTars app asks momocenter for a checkout session; momocenter creates
// a Paddle transaction and returns Paddle's checkout URL, which points at this
// site's /pay page (Paddle "default payment link") with `?_ptxn=txn_…`.
// Paddle.js, initialised with the client-side token below, opens the checkout
// for that transaction. Credits are granted by momocenter when Paddle's signed
// webhook arrives — never by this page.
//
// The client-side token is public by design (Paddle "client-side token").
// `test_` tokens talk to the Paddle sandbox; swap in the live token when the
// Paddle account goes live, and set the default payment link in Paddle
// (Checkout → Checkout settings) to https://detars.xyz/pay.

export const PADDLE_CLIENT_TOKEN = "test_cd0390f2db3ab92dca88c2abd74";

export const PADDLE_JS_URL = "https://cdn.paddle.com/paddle/v2/paddle.js";

export const paddleEnvironment = PADDLE_CLIENT_TOKEN.startsWith("test_") ? "sandbox" : "production";
