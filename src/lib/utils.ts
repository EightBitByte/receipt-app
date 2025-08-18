import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ItemizedReceiptInfo } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }) 
}

export function calculateItemizedReceiptTotal(receiptInfo : ItemizedReceiptInfo) : number {
  return Object.values(receiptInfo.usersItems)
    .reduce((total, items) => { 
      return total + items.reduce((innerTotal, item) => {
        return innerTotal + item.subtotal;
      }, 0)
    }, 0);
}

export function calculatePercentageReceiptSubtotal(total: number, userPercentage: number): number {
  return total * (userPercentage / 100);
}