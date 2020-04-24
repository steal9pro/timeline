import * as mongoose from "mongoose";
import { EventType } from "./../enums/event.enum";

export interface EventInterface extends mongoose.Types.Subdocument {
  id: number;
  type: EventType;
  time: number;
}

export interface MatchInterface extends mongoose.Document {
  id: number;
  time: string;
  events: mongoose.Types.Array<EventInterface>;
}

const EventSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  time: {
    type: Number,
    required: true,
  },
});

export const MatchSchema = new mongoose.Schema({
  time: {
    type: Number,
    required: true,
  },
  events: {
    type: [EventSchema],
    required: false,
  },
});
