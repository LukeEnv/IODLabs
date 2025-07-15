const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}, with ${this.fouls} fouls`);
    return this;
  },
  fullTime() {
    console.log(`Fulltime score is ${this.score}, with ${this.fouls} fouls`);
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .foul()
  .foul()
  .fullTime();

basketballGame
  .basket()
  .freeThrow()
  .basket()
  .basket()
  .threePointer()
  .foul()
  .foul()
  .foul()
  .foul()
  .halfTime()
  .foul()
  .foul()
  .threePointer()
  .foul()
  .fullTime();
