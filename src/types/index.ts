export interface Task {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in-progress' | 'done';
    dueDate?: Date;
    googleCalendarEventId?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}
