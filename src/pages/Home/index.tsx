import { useState } from "react";
import { DayTasks } from "../../components/DayList";
import { DayList } from "../../components/DayList";
import {
    PageWrapper,
    SmileIcon,
    LogoutIcon,
    LightModeIcon,
    DarkModeIcon,
    AddButtonWrapper,
    Overlay,
    ModalWrapper,
} from "./styles";
import { Calendar } from "../../components/calendar";

interface HomeProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

const groupTasksByDate = (tasks: DayTasks[]): Map<string, DayTasks[]> => {
    const grouped = new Map<string, DayTasks[]>();

    tasks.forEach((task) => {
        const dateKey = task.date.toISOString().split("T")[0];
        if (!grouped.has(dateKey)) {
            grouped.set(dateKey, []);
        }
        grouped.get(dateKey)!.push(task);
    });

    return grouped;
};

export function Home({ toggleTheme, isDarkMode }: HomeProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState<DayTasks[]>([]);
    console.log('tasks', tasks);

    /* ------------ Modal ------------ */
    function Modal() {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [important, setImportant] = useState(false);
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);

        const handleAddTask = () => {
            if (!title || !selectedDate) {
                alert("Por favor, preencha o título e selecione uma data.");
                return;
            }

            const newTask: DayTasks = {
                id: Date.now(), // Gera um ID único com timestamp
                title,
                description,
                isDone: false,
                date: selectedDate,
                important,
            };

            console.log('newtask', newTask);
            setTasks((prevTasks) => [...prevTasks, newTask])
            setIsModalOpen(false); // Fecha o modal
        };

        return (
            <Overlay onClick={() => setIsModalOpen(false)}>
                <ModalWrapper onClick={(e) => e.stopPropagation()}>
                    <p className="modalTitle">Adicionar nova tarefa</p>
                    <div className="modalInfos">
                        <div className="modalInputs">
                            <label htmlFor="title">Título da tarefa:</label>
                            <input
                                type="text"
                                placeholder="Título"
                                className="inputTitle"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label htmlFor="description">Descrição da tarefa:</label>
                            <textarea
                                className="inputDescription"
                                placeholder="Descrição"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div className="inputImportant">
                                <input
                                    type="checkbox"
                                    id="important"
                                    checked={important}
                                    onChange={(e) => setImportant(e.target.checked)}
                                />
                                <label htmlFor="important">Tarefa importante?</label>
                            </div>
                            <button type="button" className="button" onClick={handleAddTask}>
                                Adicionar!
                            </button>
                        </div>
                        <Calendar onSelectedDatesChange={(date) => setSelectedDate(date[0])} />
                    </div>
                </ModalWrapper>
            </Overlay>
        );
    }

    /* ------------ AddButton ------------ */
    const AddButton = () => {
        return (
            <AddButtonWrapper onClick={() => setIsModalOpen(true)}>
                <button type="button" className="button">
                    <span className="button__text">Add Task</span>
                    <span className="button__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            stroke="currentColor"
                            height="24"
                            fill="none"
                            className="svg"
                        >
                            <line y2="19" y1="5" x2="12" x1="12" />
                            <line y2="12" y1="12" x2="19" x1="5" />
                        </svg>
                    </span>
                </button>
            </AddButtonWrapper>
        );
    };

    const today = new Date();
    const groupedTasks = groupTasksByDate(tasks);
    console.log('groupedTasks', groupedTasks);

    const handleToggleTask = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const todayKey = today.toISOString().split("T")[0];
    const todayTasks = groupedTasks.get(todayKey) || [];
    groupedTasks.delete(todayKey);

    const sortedDates = Array.from(groupedTasks.keys()).sort();
    console.log('sortedDates', sortedDates);

    return (
        <>
            {isModalOpen && <Modal />}
            <PageWrapper>
                <div className="title">
                    <h1>
                        Bem vindo, V360! <SmileIcon />
                    </h1>
                    <div className="func">
                        <p style={{ color: isDarkMode ? "white" : "inherit" }}>
                            <LogoutIcon /> Sair
                        </p>
                        {isDarkMode ? (
                            <p onClick={toggleTheme} style={{ color: "white" }}>
                                <LightModeIcon /> Tema Claro
                            </p>
                        ) : (
                            <p onClick={toggleTheme}>
                                <DarkModeIcon /> Tema Escuro
                            </p>
                        )}
                    </div>
                </div>

                <p className="subtitle">Confira suas tarefas do dia</p>

                <AddButton />

                {todayTasks.length > 0 && (
                    <div className="dailyTasks">
                        <DayList
                            tasks={todayTasks}
                            date={today}
                            onToggleTask={handleToggleTask}
                        />
                    </div>
                )}

                {sortedDates.map((dateKey) => {
                    console.log('dateKey', dateKey);

                    // Extraindo ano, mês e dia da string "YYYY-MM-DD"
                    const [year, month, day] = dateKey.split('-').map(Number);

                    // Criando a data corretamente no fuso local (mês é zero-indexado)
                    const date = new Date(year, month - 1, day, 12); // Define a hora como meio-dia para evitar problemas de fuso

                    const tasksForDate = groupedTasks.get(dateKey) || [];
                    console.log('date:', date);

                    return (
                        <div className="otherTasks" key={dateKey}>
                            <DayList
                                tasks={tasksForDate}
                                date={date}
                                onToggleTask={handleToggleTask}
                            />
                        </div>
                    );
                })}
            </PageWrapper>
        </>
    );
}