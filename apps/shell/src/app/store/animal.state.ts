import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import {AddAnimal} from "./animal.actions";

export interface ZooStateModel {
  animals: any[];
}

@State<ZooStateModel>({
  name: 'zoo',
  defaults: {
    animals: [
      {
        name: 'Or',
        _id: 1
      },
      {
        name: 'Shay',
        _id: 2
      }
    ]
  }
})
@Injectable()
export class ZooState {
  @Action(AddAnimal)
  addAnimal(ctx: StateContext<ZooStateModel>, action: AddAnimal) {
    const state = ctx.getState();
    console.log('action', action)
    ctx.setState({
      ...state,
      animals: [...state.animals, action.animal]
    });
    console.log('addAnimal()',ctx.getState())
  }
}
