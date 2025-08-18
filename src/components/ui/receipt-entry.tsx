import type { UserInfo, BillingItem } from "@/lib/types"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"
import { calculatePercentageReceiptSubtotal } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface ReceiptEntryProps {
  /* The user to display for this entry */
  user: UserInfo,
  /* The bill's total */
  total: number,
  /* Either a list of items purchased or a percentage of the bill to pay*/
  info: number | BillingItem[],
};

/**
 * 
 * @returns 
 */
export default function ReceiptEntry({ 
  user,
  total,
  info,
} : ReceiptEntryProps) {
    if (typeof info == "number") {
      return (
        <div 
          className="w-full border-b border-b-subdued pb-4 flex justify-between 
                    items-center"
        >
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src={user.image} alt={`An image of ${user.username}`} />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <h1 className="text-xl">{user.name}</h1>
            <p className="text-subdued">—</p>
            <p className="text-subdued text-xl">{info}%</p>
          </div>
          <p className="text-xl">
            ${calculatePercentageReceiptSubtotal(
                total, 
                info
              ).toFixed(2)}
          </p>
        </div>
      )
    } else {
      const subtotal: number = info.reduce((total, item) => {
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
                {info.map((item) =>
                  <div key={item.title} className="flex justify-between w-full">
                    <p className="text-md">{item.title}</p>
                    <p>${item.subtotal.toFixed(2)}</p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      )
  }
}