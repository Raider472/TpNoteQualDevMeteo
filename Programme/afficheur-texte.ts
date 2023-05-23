import { IObserver } from "./IObserver";

export class AfficheurTexte implements IObserver {

  private affiche(humidité: number, température: number): void {
    console.log(température + "°C\n" + humidité + "%");
  }

  public miseAJour(humidité: number, température: number): void {
      this.affiche(humidité, température)
  }
}
