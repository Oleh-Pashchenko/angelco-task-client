import { RequestResponse } from 'request';
import * as request from 'request';
import { TaskClientInterface } from './interfaces/task-client.interface';

export module TaskClientModule  {
    
    export class TaskClient implements TaskClientInterface {

        private url: string;

        constructor(url: string) {
            this.url = url;
        }

        public addTask(filers: Array<string>): Promise<any> {
            return new Promise((resolve, reject) => {
                request.post(`${this.url}/start`, (error: any, response: RequestResponse, body: any) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(body);
                });
            });
        }

        public getStatus(id: string): Promise<any> {
            return new Promise((resolve, reject) => {
                request.get(`${this.url}/task/${id}`, (error: any, response: RequestResponse, body: any) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(body);
                });
            });
        }

        public getReport(id: string): Promise<any> {
            return new Promise((resolve, reject) => {
                request.get(`${this.url}/report/${id}`, (error: any, response: RequestResponse, body: any) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(body);
                });
            });
        }
    }
}