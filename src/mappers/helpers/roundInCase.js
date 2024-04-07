import { MathService } from "../../services";

export function roundInCase({ flag, value }) {
  return flag ? MathService.round(value) : value;
}
