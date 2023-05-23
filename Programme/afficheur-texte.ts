import { IObserver } from "./IObserver";

export class AfficheurTexte implements IObserver {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }

  affiche(index: number): void {
    console.log(this.tabTemperature[index] + "°C\n" + this.tabHumidité[index] + "%");
  }

  miseAJour(humidité: number, température: number): void {
    this.tabTemperature.push(température);
    this.tabHumidité.push(humidité);
  }
}
