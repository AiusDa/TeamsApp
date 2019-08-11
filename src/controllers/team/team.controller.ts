import { DocumentQuery } from 'mongoose';

import { TeamModel, ITeamModel } from '../../models/team.model';

export class TeamController {
  public getAll(): DocumentQuery<ITeamModel[], ITeamModel, {}> {
    return TeamModel.find();
  }

  public getById(id: string): DocumentQuery<ITeamModel, ITeamModel, {}> {
    return TeamModel.findById(id);
  }

  public create(data: { name: string }): Promise<ITeamModel> {
    return TeamModel.create({
      name: data.name
    });
  }
}
