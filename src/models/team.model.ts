import * as mongoose from 'mongoose';

export interface ITeamModel extends mongoose.Document {
  name: string;
  email: string;
  image: string;
  teamId: string;
}

const TeamSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

export const TeamModel: mongoose.Model<ITeamModel> = mongoose.model<ITeamModel>(
  'Team',
  TeamSchema
);
