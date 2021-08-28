class Account {

  #numberCode;
  #creationDate;
  #alias;
  #interestType;
  #interestRate;
  #transferDetails;
  #balance;

  constructor({
    numberCode,
    alias = "기본",
    creationDate,
    interestType = "연",
    interestRate = "0.10%",
    transferDetails,
    balance,
  }) {
    this.#numberCode = numberCode;
    this.#alias = alias;
    this.#creationDate = creationDate;
    this.#interestType = interestType;
    this.#interestRate = interestRate;
    this.#transferDetails = transferDetails;
    this.#balance = balance;
  }

  // 기본 정보
  get basicInfo() {
    return this.#extractBasicInfo();
  }

  #extractBasicInfo() {
    return `${this.#alias}: ${this.#numberCode} / 현재 잔액: ${this.#readableBalance(this.#balance)} `;
  }

  #readableBalance(money) {
    return money.toLocaleString("ko-KR");
  }

  // 상세 정보
  get datailInfo() {
    return this.#extractAccountDTO();
  }

  #extractAccountDTO() {
    return {
      numberCode: this.#numberCode,
      creation: `${this.#alias} (${this.#creationDate})`,
      interest: `${this.#interestType} ${this.#interestRate}`,
      transfers: this.#extractTransfersDetailDTO()
    }
  }

  // 이체 내역 정보
  get transfers() {
    return {
      totalCount: this.#transferDetails.length,
      startId: this.#transferDetails[0].id,
      finishId: this.#transferDetails[0].id,
      details: this.#extractTransfersDetailDTO()
    };  
  }

  #extractTransfersDetailDTO() {
    const detailsDTO = [];
    for (let privDetail of this.#transferDetails) {
      const detail = {
        date: privDetail.date,
        type: privDetail.isDeposit ? "입금" : "출금",
        amount: `${privDetail.isDeposit ? "+" : "-"} ${this.#readableBalance(privDetail.amount)} 원`,
        balance: `${this.#readableBalance(privDetail.balance)} 원`
      }
      detailsDTO.push(detail);
    }
    return detailsDTO;
  }
}

export default Account;
