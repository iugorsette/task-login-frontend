import React, { useState } from "react";
import Modal from "react-modal";
import { ITask, TaskController } from "../controllers/Task";
import {
  ModalDiv,
  ModalDivButton,
  SelectStyled,
  StyledCard,
  StyledModal,
} from "./Component.styled";
import { Button, Input } from "../App.styled";
import { toast } from "react-toastify";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaskModalCreate: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
}) => {
  const taskController = new TaskController();
  const [status, setStatus] = useState("pending");
  const [title, setTitle] = useState("This is a title");
  const [description, setDescription] = useState("This is a description");

  async function createTask() {
    const response: ITask[] = await taskController.createTaskController({
      title,
      description,
      status,
    });
    if (response.status !== 201) {
      toast.error(response.message);
    }
    if (response.status === 201) {
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
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="aaa">
      <StyledModal>
        <StyledCard status={status}>
          <h1>Nova Tarefa</h1>
          <ModalDiv>
            <Input type="text" value={title} onChange={handleTitleChange} />
          </ModalDiv>
          <ModalDiv>
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />{" "}
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
            <Button bgColor="green" onClick={createTask}>
              Criar
            </Button>
          </ModalDivButton>
        </StyledCard>{" "}
      </StyledModal>
    </Modal>
  );
};
