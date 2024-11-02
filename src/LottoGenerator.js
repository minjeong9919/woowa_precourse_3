import MoneyValidator from "./MoneyValidator.js";
import { Random, Console } from "@woowacourse/mission-utils";

class LottoGenerator {
  lottoCount;
  lottos;
  money;

  constructor(money) {
    this.money = new MoneyValidator(money).money;
    this.lottoCount = this.money / 1000;
    this.lottos = this.generateLottos();
    this.generateLottos();
    this.getLottos();
  }

  generateLottos() {
    const lottos = [];
    for (let i = 0; i < this.lottoCount; i++) {
      lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    this.lottos = lottos;
  }

  getLottos() {
    return this.lottos;
  }
}

export default LottoGenerator;
