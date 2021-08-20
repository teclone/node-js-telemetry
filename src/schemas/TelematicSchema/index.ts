import { Document, Schema } from 'mongoose';
import { decorateSchema } from '../../lib';

export type Distance = 'metre' | 'kilometer';

export type Volume = 'litre';

export interface TelematicDocument extends Document {
  EquipmentHeader: {
    OEMName: string;
    Model: string;
    SerialNumber: string;
    SnapshotTime: string;
  };
  Location: {
    Latitude: number;
    Longitude: number;
    Altitude: number;
    AltitudeUnits: Distance;
  };
  CumulativeIdleHours: {
    Hour: number;
  };
  CumulativeOperatingHours: {
    Hour: number;
  };
  Distance: {
    OdometerUnits: Distance;
    Odometer: number;
  };
  EngineStatus: {
    Running: boolean;
  };
  FuelUsed: {
    FuelUnits: Volume;
    FuelConsumed: number;
  };
  FuelRemaining: {
    Percent: number;
  };
}

export const TelematicSchema = decorateSchema(
  new Schema(
    {
      equipmentHeader: {
        OEMName: { type: String },
        Model: { type: String },
        SerialNumber: { type: String },
        SnapshotTime: { type: Date },
      },

      Location: {
        Latitude: { type: Number },
        Longitude: { type: Number },
        Altitude: { type: Number },
        AltitudeUnits: { type: String },
      },
      CumulativeIdleHours: {
        Hour: { type: Number },
      },
      CumulativeOperatingHours: {
        Hour: { type: Number },
      },
      Distance: {
        OdometerUnits: { type: String },
        Odometer: { type: Number },
      },
      EngineStatus: {
        Running: { type: Boolean },
      },
      FuelUsed: {
        FuelUnits: { type: String },
        FuelConsumed: { type: Number },
      },
      FuelRemaining: {
        Percent: { type: Number },
      },
    },

    { timestamps: true, minimize: false }
  )
);
