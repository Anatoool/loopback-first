import { Count, Filter, Where } from '@loopback/repository';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';
import { GeocoderService } from '../services';
export declare class TodoController {
    todoRepository: TodoRepository;
    protected geoService: GeocoderService;
    constructor(todoRepository: TodoRepository, geoService: GeocoderService);
    create(todo: Todo): Promise<Todo>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Todo[]>;
    updateAll(todo: Todo, where?: Where): Promise<Count>;
    findById(id: number): Promise<Todo>;
    updateById(id: number, todo: Todo): Promise<void>;
    deleteById(id: number): Promise<void>;
}
