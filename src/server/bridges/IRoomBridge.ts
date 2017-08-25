import { IRoom } from 'temporary-rocketlets-ts-definition/rooms';

export interface IRoomBridge {
    getById(id: string, rocketletId: string): IRoom;
}
