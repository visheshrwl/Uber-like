
import { io, Socket } from "socket.io-client";

class WebSocketService {
  private socket: Socket | null = null;

  connect() {
    this.socket = io(process.env.REACT_APP_WEBSOCKET_URL as string);
  }

  subscribeToDriverLocation(
    driverId: string,
    callback: (location: { lat: number; lng: number }) => void
  ) {
    if (!this.socket) return;
    this.socket.on(`driver-location-${driverId}`, callback);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new WebSocketService();
