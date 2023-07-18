import { useEffect, useState } from "react";
import { ITask, TaskController } from "../controllers/Task";
import { TaskCard } from "../components/TaskCard";
import { toast } from "react-toastify";
import { CardCollection, FakeButton } from "../App.styled";
import { TaskModal } from "../components/TaskModalEdit";
import { TaskModalCreate } from "../components/TaskModalCreate";
import { Login } from "./Login";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";

export function Home() {
  if (localStorage.getItem("token") === null) {
    return <Login />;
  }
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const taskController = new TaskController();

  async function getTasks() {
    const { tasks }: any = await taskController.getTasksController();
    setLoading(false);
    setTasks(tasks);
    setFilteredTasks(tasks);
    loading && toast.info("Carregando...");
  }

  useEffect(() => {
    getTasks();
  }, []);

  function filterTasksByStatus(status: string) {
    const filteredTasks = tasks.filter((item) =>
      item.status.toLowerCase().includes(status.toLowerCase())
    );
    return filteredTasks;
  }

  function filterTasksByTitle(title: string) {
    const filteredTasks = tasks.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    return filteredTasks;
  }

  function handleCardClick(task: ITask) {
    setSelectedTask(task);
    setIsModalOpen(true);
  }

  function handleCloseModalCreate() {
    setIsModalCreateOpen(false);
  }

  function handleCloseModal() {
    setSelectedTask(null);
    setIsModalOpen(false);
  }

  return (
    <div>
      <Header isLogged={true} />
      <Navigation
        handleModalCreate={() => setIsModalCreateOpen(true)}
        filterTasksByTitle={filterTasksByTitle}
        setFilteredTasks={setFilteredTasks}
        filterTasksByStatus={filterTasksByStatus}
      />
      <CardCollection>
        {loading && loading === true ? (
          <h1>Carregando... </h1>
        ) : filteredTasks && filteredTasks.length > 0 ? (
          filteredTasks.map((item: ITask) => (
            <FakeButton key={item.id} onClick={() => handleCardClick(item)}>
              <TaskCard {...item} />
            </FakeButton>
          ))
        ) : (
          <h1>Não há tarefas cadastradas</h1>
        )}
      </CardCollection>
      {selectedTask && (
        <>
          <TaskModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            task={selectedTask}
          />
        </>
      )}
      <TaskModalCreate
        isOpen={isModalCreateOpen}
        onClose={handleCloseModalCreate}
      />
    </div>
  );
}
