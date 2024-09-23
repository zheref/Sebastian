import { Observable } from 'rxjs';

export type CommandFlow = Observable<string>

export enum PerformanceClass {
  SIMULATION = 'simulation',
  EXECUTION = 'execution',
}

export interface CommandFlowConfig {
  performanceClass: PerformanceClass
  shouldSaveLogs: boolean
}

export type CommandFlowBuilder = (config: CommandFlowConfig) => CommandFlow
