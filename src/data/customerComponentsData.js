import coffeeShop from '../assests/coffee-shop.svg';
import moneyIncome from '../assests/money-income.svg';
import cashPayment from '../assests/cash-payment.svg';

const customerComponentsData = [
  { 
    id: 1,
    title: "I need a decentralised account",
    desc: `"Start taking payments directly into your own decentralised account. Take payments regardless of whether your user wants to pay using normal currency or crypto currency.
    Let your users pay using Universal coin to avoid merchant costs of 3-4% per transaction.
    And get you money instantly."`,
    svg: cashPayment
  },
  
  { id: 2,
    title: "I need a CRM to know my customers",
    desc: `"If you run a restaurant or small retail shop or maybe a barber shop, regardless of your business, now you have a chance to know your customers better than ever before.
    Let your customers pay with universal coin,so with their consent, you can have instant automatic access to their data.
    You don’t need any special device.Download our platform and instantly take payments in your venue for free. No transaction costs!"`,
    svg: coffeeShop
  },
  { id: 3,
    title: "I need an accountant",
    desc: `"Not anymore, our software will automate all of the accounting processes for you.
            Categorising transactions, analytics, sending tax returns and so much more."`,
    svg: moneyIncome
  },
  { id: 4,
    title: "I need analytics",
    desc: `"Description 4"`,
    svg: cashPayment
  },
  { id: 5,
    title: "I need HR system",
    desc: `"Description 5"`,
    svg: cashPayment
  },
  { id: 6,
    title: "I need Payroll system",
    desc: `"Description 6"`,
    svg: cashPayment
  },
]

export default customerComponentsData