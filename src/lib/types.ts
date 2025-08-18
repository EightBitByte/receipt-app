export type UserInfo = {
  username: string,
  name: string,
  initials: string,
  image: string,
};

export type BillingItem = {
  title: string,
  subtotal: number
}

export type ItemizedReceiptInfo = {
  usersItems: {[key: string]: BillingItem[]},
}

export type PercentageReceiptInfo = {
  usersPercentages: {[key: string]: number},
  items?: BillingItem[],
  total?: number,
}