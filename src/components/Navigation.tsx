import { Button } from "../App.styled";
import {
  NavigationComponent,
  OptionStyled,
  SearchTask,
  SelectStyled,
} from "./Component.styled";

export interface INavigationProps {
  handleModalCreate: () => void;
  filterTasksByTitle: (title: string) => any;
  filterTasksByStatus: (status: string) => void;
  setFilteredTasks: (string: string) => void;
}

export function Navigation({
  handleModalCreate,
  filterTasksByTitle,
  setFilteredTasks,
  filterTasksByStatus,
}: INavigationProps) {
  function handleFilterTitle(event) {
    const value = event.target.value;
    setFilteredTasks(filterTasksByTitle(value));
  }
  function handleFilterStatus(event) {
    const value = event.target.value;
    setFilteredTasks(filterTasksByStatus(value));
  }

  return (
    <NavigationComponent>
      <Button onClick={handleModalCreate} bgColor="blue">
        Nova Tarefa
      </Button>
      <SearchTask
        placeholder="Pesquisar tarefa"
        onChange={(event) => handleFilterTitle(event)}
      />
      <SelectStyled onChange={(event) => handleFilterStatus(event)}>
        <OptionStyled value="">Todos</OptionStyled>
        <OptionStyled value="pending">Pendentes</OptionStyled>
        <OptionStyled value="active">Ativos</OptionStyled>
        <OptionStyled value="finished">Finalizados</OptionStyled>
      </SelectStyled>
    </NavigationComponent>
  );
}
