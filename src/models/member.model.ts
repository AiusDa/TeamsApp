import * as mongoose from 'mongoose';

export interface IMemberModel extends mongoose.Document {
  name: string;
  email: string;
  image: string;
  teamId: string;
}

const MemberSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    image: {
      type: String
    },
    teamId: {
      type: mongoose.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);

export const MemberModel: mongoose.Model<IMemberModel> = mongoose.model<
  IMemberModel
>('Member', MemberSchema);
