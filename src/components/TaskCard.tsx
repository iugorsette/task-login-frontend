import { ITask } from "../controllers/Task";
import { formatRelativeTime } from "../utils/time";
import { Description, StyledCard, StyledDate, Title } from "./Component.styled";

export function TaskCard(props: ITask) {     
  const createdAt = formatRelativeTime(props.created_at);
  return (
    <StyledCard status={props.status}>
      <Title>{props.title}</Title>
      <div>
        <Description>Descrição: {props.description}</Description>
        <StyledDate><time dateTime={props.created_at.toString()}>{createdAt}</time></StyledDate>
      </div>
    </StyledCard>
  );
}
