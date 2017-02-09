import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { url, id, filters } from './config';
import { TaskClientModule } from '../index';

const expect = chai.expect;
chai.use(chaiHttp);

let taskClient = new TaskClientModule.TaskClient(url);

describe("Api", (): void => {
    it('It should return status of current id', (done: Function): void => {
        taskClient.getStatus(id)
            .then(result => {
                let data = JSON.parse(result);
                expect(data).to.be.an('object');
                expect(data.id).to.be.equal(id);
                done();
            })
            .catch(error => {
            });
    });

    it('It should return report', (done: Function): void => {
        taskClient.getReport(id)
            .then(result => {
                expect(result).to.be.an('string');
                done();
            })
            .catch(error => {
            });
    });

    it('It should return task id', (done: Function): void => {
        taskClient.addTask(filters)
            .then(result => {
                expect(result).to.be.an('string');
                done();
            })
            .catch(error => {
            });
    });
});
