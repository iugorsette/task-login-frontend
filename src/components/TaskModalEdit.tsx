import React, { useState } from "react";
import Modal from "react-modal";
import { ITask, TaskController } from "../controllers/Task";
import {
  ModalDiv,
  ModalDivButton,
  ModalHeader,
  SelectStyled,
  StyledCard,
  StyledModal,
} from "./Component.styled";
import { Button, ImageButton, Input } from "../App.styled";
import { toast } from "react-toastify";
import trash from "../assets/trash.svg";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: ITask | null;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  task,
}) => {
  if (!task) {
    return null;
  }
  const taskController = new TaskController();
  const [status, setStatus] = useState(task.status);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  async function updateTasks() {
    const response: ITask[] = await taskController.updateTaskController({
      _id: task._id,
      title,
      description,
      status,
    });
    if (response.status !== 200) {
      toast.error(response.message);
    }
    if (response.status === 200) {
      onClose();
      window.location.reload();
    }
    toast.success(response.message);
  }

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };
  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Task Modal">
      <StyledModal>
        <StyledCard status={status}>
          <ModalHeader>
            <h1>Editar Tarefa</h1>
            <ImageButton color="red">
              <img src={trash} alt="" />
            </ImageButton>
          </ModalHeader>
          <ModalDiv>
            <Input type="text" value={title} onChange={handleTitleChange} />
          </ModalDiv>
          <ModalDiv>
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </ModalDiv>
          <ModalDiv>
            <SelectStyled name="status" id="" onChange={handleStatusChange}>
              <option value="active" selected={status === "active"}>
                Ativo
              </option>
              <option value="pending" selected={status === "pending"}>
                Pendente
              </option>
              <option value="finished" selected={status === "finished"}>
                Finalizado
              </option>
            </SelectStyled>
          </ModalDiv>
          <ModalDivButton>
            <Button bgColor="red" onClick={onClose}>
              Cancelar
            </Button>
            <Button bgColor="green" onClick={updateTasks}>
              Atualizar
            </Button>
          </ModalDivButton>
        </StyledCard>
      </StyledModal>
    </Modal>
  );
};
