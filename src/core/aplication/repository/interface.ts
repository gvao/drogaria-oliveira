export interface Repository {
    items: unknown[]
    saveItem(item: unknown): Promise<void>
}
