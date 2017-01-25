export class Project {
  constructor(public name: string,
    public groupNames: string[],
    public description: string,
    public neededFunds: number,
    public collectedFunds: number,
    public rewards: string) {}
}
