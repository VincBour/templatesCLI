import { StateSchema } from "xstate";

export interface [Name]Context {
 a: number,
 b: number,
}

export interface [Name]Schema extends StateSchema {
    context: [Name]Context;
    states: {
        state_1: StateSchema<[Name]Context>;
    }
}

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type [Name]EventsType = PropType<[Name]Events, "type">;

export type [Name]Events = Event_1 | Event_2

type Event_1 = { type: "EVENT_1" };
type Event_2 = { type: "EVENT_2" };