import { Observable } from 'rxjs';

export type CommandFlow = Observable<string>

export enum PerformanceClass {
  SIMULATION = 'simulation',
  EXECUTION = 'execution',
}

export function getPerformanceClasses(): PerformanceClass[] {
  return Object.values(PerformanceClass).filter(
    (value) => typeof value === 'string'
  ) as PerformanceClass[];
}

export interface CommandFlowConfig {
  performanceClass: PerformanceClass
  shouldSaveLogs: boolean
}

export type CommandFlowBuilder = (config: CommandFlowConfig) => CommandFlow
