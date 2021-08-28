import Account from './Account.mjs';

const accountDataFromAPI = {
  numberCode: "3333-22-7777777",
  alias: "주거래 통장",
  creationDate: "2021-08-15",
  interestRate: "연",
  interestRate: "0.80%",
  transferDetails: [
    {
      id: 2341,
      date: "2021-08-15 20:02:15",
      isDeposit: true,
      amount: 2000000,
      balance: 3500000,
    },
    {
      id: 2342,
      date: "2021-08-15 20:02:18",
      isDeposit: true,
      amount: 1200000,
      balance: 4700000,
    },
    {
      id: 2343,
      date: "2021-08-16 09:00:02",
      isDeposit: false,
      amount: 500000,
      balance: 4200000,
    },
  ],
  balance: 4200000
}

const kkoAccount = new Account(accountDataFromAPI);

const basicInfo = kkoAccount.basicInfo;
console.log(`[INFO] 기본 정보 (basicInfo)\n${basicInfo}\n`);
/*
  [INFO] 기본 정보 (basicInfo)
  주거래 통장: 3333-22-7777777 / 현재 잔액: 4,200,000 
 */

const detailInfoStr = JSON.stringify(kkoAccount.datailInfo, null, 2);
console.log(`[INFO] 상세 정보 (datailInfo)\n${detailInfoStr}\n`);
/*
  [INFO] 상세 정보 (datailInfo)
  {
    "numberCode": "3333-22-7777777",
    "creation": "주거래 통장 (2021-08-15)",
    "interest": "연 0.80%",
    "transfers": [
      {
        "date": "2021-08-15 20:02:15",
        "type": "입금",
        "amount": "+ 2,000,000 원",
        "balance": "3,500,000 원"
      },
      {
        "date": "2021-08-15 20:02:18",
        "type": "입금",
        "amount": "+ 1,200,000 원",
        "balance": "4,700,000 원"
      },
      {
        "date": "2021-08-16 09:00:02",
        "type": "출금",
        "amount": "- 500,000 원",
        "balance": "4,200,000 원"
      }
    ]
  }
 */

const transfersStr = JSON.stringify(kkoAccount.transfers, null, 2);
console.log(`[INFO] 이체 내역 정보 (transfers)\n${transfersStr}\n`);
/*
  [INFO] 이체 내역 정보 (transfers)
  {
    "totalCount": 3,
    "details": [
      {
        "date": "2021-08-15 20:02:15",
        "type": "입금",
        "amount": "+ 2,000,000 원",
        "balance": "3,500,000 원"
      },
      {
        "date": "2021-08-15 20:02:18",
        "type": "입금",
        "amount": "+ 1,200,000 원",
        "balance": "4,700,000 원"
      },
      {
        "date": "2021-08-16 09:00:02",
        "type": "출금",
        "amount": "- 500,000 원",
        "balance": "4,200,000 원"
      }
    ]
  }
 */
