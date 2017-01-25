export class Project {
  public collectedFunds: number = 0;
  constructor(public name: string,
    public groupNames: string,
    public description: string,
    public neededFunds: number,
    public rewards: string) {}
}
