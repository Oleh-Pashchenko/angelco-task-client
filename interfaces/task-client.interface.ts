
export interface TaskClientInterface {
    addTask(filters: Array<string>);

    getStatus(id: string);

    getReport(id: string);
};