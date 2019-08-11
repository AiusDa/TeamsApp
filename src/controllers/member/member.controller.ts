import { DocumentQuery } from 'mongoose';

import { MemberModel, IMemberModel } from '../../models/member.model';

export class MemberController {
  public find(
    conditions: { [key: string]: string } = {}
  ): DocumentQuery<IMemberModel[], IMemberModel, {}> {
    return MemberModel.find(conditions);
  }

  public findByTeamId(
    teamId: string
  ): DocumentQuery<IMemberModel[], IMemberModel, {}> {
    return MemberModel.find({ teamId });
  }

  public create(data: { [key: string]: any }): Promise<IMemberModel> {
    return MemberModel.create({
      name: data.name,
      email: data.email,
      image: data.image,
      teamId: data.teamId
    });
  }
}
