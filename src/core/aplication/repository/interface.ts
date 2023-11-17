export interface Repository<T> {
    items: T[]
    saveItem(item: T): Promise<void>
    removeById(id: string): Promise<void>
    getById(id: string): Promise<T | null>
    getAll(): Promise<T[]>
}
