import type { ItemizedReceiptInfo, PercentageReceiptInfo, UserInfo } from "@/lib/types"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"

interface ReceiptEntryProps {
  user: UserInfo,
  total: number,
  info: PercentageReceiptInfo | ItemizedReceiptInfo,
};


export default function ReceiptEntry({ 
  user,
  total,
  info,
} : ReceiptEntryProps) {
  switch (info.type) {
    case "percentage":
      return (
        <div 
          className="w-full border-b border-b-subdued pb-4 flex justify-between 
                    items-center"
        >
          <div className="flex gap-4 items-center">
            <h1 className="text-xl">{user.name}</h1>
            <p className="text-subdued">—</p>
            <p className="text-subdued text-xl">{info.usersPercentages[user.username]}%</p>
          </div>
          <p className="text-xl">${(total / info.usersPercentages[user.username]).toFixed(2)}</p>
        </div>
      )
    case "itemized":
      const subtotal: number = info.usersItems[user.username]
        .reduce((total, item) => {
          return total + item.subtotal
        }, 0);

      return (
          <Accordion
            type="single"
            collapsible
            className="w-full border-b border-b-subdued"
          >
            <AccordionItem value="item">
              <AccordionTrigger subtotal={subtotal}>
                <h1 className="text-lg">{user.name}</h1>
              </AccordionTrigger>
              <AccordionContent>
                {info.usersItems[user.username].map((item) =>
                  <div key={item.title} className="flex justify-between w-full">
                    <p className="text-md">{item.title}</p>
                    <p>${item.subtotal.toFixed(2)}</p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      )
    default:
      const _exhaustiveCheck: never = info;
      return _exhaustiveCheck;
  }
}