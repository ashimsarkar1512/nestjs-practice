import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private isConnected = false;

  onmoduleInit() {
    this.isConnected = true;
    console.log('Database connected');
  }

  onmoduleShutdown(singnal: string) {
    this.isConnected = false;
    console.log(`Database disconnected due to signal: ${singnal}`);
  }

  getStatus() {
    return this.isConnected
      ? 'Database is connected'
      : 'Database is disconnected';
  }
}
