export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
}

export class TaskController {
  private token: string;
  private uri = "http://localhost:3000/api/task";
  constructor() {
    this.token = localStorage.getItem("token") || "";
  }

  async getTasksController(): Promise<ITask[] | undefined> {
    const response: any = await fetch(this.uri, {
      method: "GET",
      headers: {
        token: this.token,
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
        const { tasks } = await response.json();
        const { status } = response;
        return { tasks, status };
      }
    return response;
  }

  async updateTaskController(task: ITask): Promise<ITask | undefined> {
    const response: any = await fetch(`${this.uri}?id=${task._id}`, {
      method: "PUT",
      headers: {
        token: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.status === 200) {
      const { message } = await response.json();
      const { status } = response;
      return { message, status };
    }
  }

  async deleteTaskController(id: string): Promise<ITask | undefined> {
    const response: any = await fetch(`${this.uri}?id=${id}`, {
      method: "DELETE",
      headers: {
        token: this.token,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const { message } = await response.json();
      const { status } = response;
      return { message, status };
    }
  }
  async createTaskController(task: ITask): Promise<ITask | undefined> {
    const response: any = await fetch(this.uri, {
      method: "POST",
      headers: {
        token: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.status === 201) {
      const { message } = await response.json();
      const { status } = response;
      return { message, status };
    }
  }
}
