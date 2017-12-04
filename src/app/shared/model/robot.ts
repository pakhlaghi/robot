import { Direction } from './direction.enum';

export class Robot {
  public x: number;
  public y: number;
  public direction: Direction;
  public status: string;
  constructor(x: number, y: number, direction: Direction, status: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}
