import { DayListWrapper } from "./styles";

export interface DayTasks {
    id: number;
    title: string;
    description?: string;
    isDone: boolean;
    date: Date;
    important?: boolean;
}

interface DayListProps {
    tasks: DayTasks[];
    date: Date;
    onToggleTask: (taskId: number) => void;
}

export function DayList({ tasks, date, onToggleTask }: DayListProps) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return (
        <DayListWrapper>
            <h2 className="date">{formattedDate}</h2>
            <div className="taskList">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task.id} className="task">
                            <label
                                className="container"
                                style={{ display: "flex", alignItems: "center" }}
                            >
                                <input
                                    type="checkbox"
                                    style={{ display: "none" }}
                                    id={`checkbox-${task.id}`}
                                    checked={task.isDone}
                                    onChange={() => onToggleTask(task.id)} // Usar apenas o evento onChange
                                />
                                <svg
                                    viewBox="0 0 64 64"
                                    height="2em"
                                    width="2em"
                                    style={{ cursor: "pointer" }}
                                >
                                    <path
                                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                        pathLength="575.0541381835938"
                                        className="path"
                                    />
                                </svg>
                            </label>

                            <div className="infos">
                                <h3 style={{ color: task.important ? "red" : "white" }}>
                                    {task.title}
                                </h3>
                                {task.description && <p>{task.description}</p>}
                                <p>Status: {task.isDone ? "Concluído" : "Pendente"}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Sem tarefas para hoje!</p>
                )}
            </div>
        </DayListWrapper>
    );
}
