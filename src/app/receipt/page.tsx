import type { UserInfo, ItemizedReceiptInfo, PercentageReceiptInfo} from "@/lib/types";
import ReceiptHeader from "@/components/ui/receipt-header";
import ReceiptEntry from "@/components/ui/receipt-entry";


const AVATAR_DATA: UserInfo[] = [
  {
    username: "@sadjester",
    name: "Pomni",
    initials: "Po",
    image: "pomni.webp"
  },
  {
    username: "@ilovesasha",
    name: "Heavyweapons Guy",
    initials: "HG",
    image: "heavy.webp"
  },
  {
    username: "@meditativestrength",
    name: "King Baldwin",
    initials: "KB",
    image: "leper.webp"
  },
  {
    username: "@thebestkennedy",
    name: "Leon Kennedy",
    initials: "LK",
    image: "leon.webp"
  }
];

const ITEMIZED_RECEIPT_INFO: ItemizedReceiptInfo = {
  type: "itemized",
  usersItems: {
    "@sadjester": [
      {title: "Tonkotsu Ramen", subtotal: 12.99},
      {title: "Iced Green Tea", subtotal: 2.99},
    ],
    "@ilovesasha": [
      {title: "Tonkotsu Ramen", subtotal: 12.99},
      {title: "Hot Sake", subtotal: 8.99},
      {title: "Pork Buns", subtotal: 7.99},
    ],
    "@meditativestrength": [
      {title: "Tonkotsu Ramen", subtotal: 12.99},
      {title: "Water", subtotal: 0.00},
    ],
    "@thebestkennedy": [
      {title: "Tonkotsu Ramen", subtotal: 12.99},
      {title: "Pork Buns", subtotal: 7.99},
      {title: "Coke Zero", subtotal: 2.29},
    ]
  }
}

const PERCENTAGE_RECEIPT_INFO: PercentageReceiptInfo = {
  type: "percentage",
  usersPercentages: {
    "@sadjester": 25,
    "@ilovesasha": 50,
    "@meditativestrength": 12.5,
    "@thebestkennedy": 12.5,
  },
  total: 12.27,
}

export default function Receipt() {
  const total = Object.values(ITEMIZED_RECEIPT_INFO.usersItems)
    .reduce((total, items) => { 
      return total + items.reduce((innerTotal, item) => {
        return innerTotal + item.subtotal;
      }, 0)
    }, 0);

  return (
    <div className="px-24 py-10 grow flex flex-col gap-8">
      <ReceiptHeader 
        title="Ramen Night w/ the Gang"
        date={new Date()}
        users={AVATAR_DATA}
      />
      <div className="w-full grow flex gap-24">
        {/* Placeholder for receipt image */}
        <div className="w-2xl bg-zinc-700 rounded-xl" />
        <div className="flex flex-col grow gap-8">
          {AVATAR_DATA.map((userInfo) =>
            <ReceiptEntry 
              key={userInfo.username}
              user={userInfo}
              info={ITEMIZED_RECEIPT_INFO}
              total={total}
            />
          )}
          <div className="flex justify-between text-xl">
            <h1>Total</h1>
            <h2>${total.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}