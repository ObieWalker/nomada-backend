import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { UserPayload } from './userPayload';

declare module 'socket.io' {
  interface Socket {
    data: {
      user: UserPayload;
    };
  }
}

declare global {
  var io: any;
}
