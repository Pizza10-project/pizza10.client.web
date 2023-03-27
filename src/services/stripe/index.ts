import Stripe from "stripe";

export const stripe = new Stripe("sk_test_51MlxWbFkjOQYLGebBWfb7Os1QrEaCLuS6kXs3OGSJbFXysw4LeZShjLTqEG6gMxid9gafXOS90ldhKC18i0XxW3500kCFJnyw1", {
    apiVersion: "2022-11-15",
    appInfo: {
        name: 'Pizza 10'
    }
})