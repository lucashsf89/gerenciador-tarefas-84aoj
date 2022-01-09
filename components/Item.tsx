import moment from "moment";
import { NextPage } from "next";
import { Task } from "../types/Task";

type ItemProps = {
    task : Task
    selectTask(task : Task) : void
}

export const Item : NextPage<ItemProps> = ({ task }) => {
export const Item : NextPage<ItemProps> = ({ task, selectTask }) => {

    const getDateText = (task : Task) => {
        if(task && task.finishDate){
@@ -17,7 +18,8 @@ export const Item : NextPage<ItemProps> = ({ task }) => {
    }

    return (
        <div className={"container-item" + (task?.finishDate ? "" : " active")}>
        <div className={"container-item" + (task?.finishDate ? "" : " active")}
            onClick={e => task?.finishDate ? null : selectTask(task)}>
            <img src={task?.finishDate ? '/checked.svg' : 'not-checked.svg'}
                alt={task?.finishDate ? 'Tarefa Concluída' : 'Tarefa não concluída'}/>
            <div>
                <p className={task?.finishDate ? "finished" : ""}>{task.name}</p>
                <span>{getDateText(task)}</span>
            </div>
        </div>
    );
}