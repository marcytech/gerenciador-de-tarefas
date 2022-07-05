import { useState } from "react"
import Button from "../Button"
import "./styles.css"

function Tasks(props) {
	const editar = (event) => {
		if (hasUnique()) {
			props.show(true)
			props.edit(getSelectedItem())
		}
	}

	const getSelectedItem = () => {
		return props.data.find((task) => {
			return task.selected
		})
	}

	const hasUnique = () => {
		const tasks = props.data.filter((task) => {
			return task.selected
		})
		return tasks.length === 1
	}

	const remover = (event) => {
		const tasks = props.data.filter((task) => {
			if (!task.selected) return task
		})
		props.update(tasks)
	}

	const concluir = (event) => {
		const tasks = props.data.map((task) => {
			if (task?.selected) task.done = true
			return task
		})
		props.update(tasks)
	}

	const select = (event, id) => {
		const tasks = props.data.map((task) => {
			if (task.id === id) task.selected = event.target.checked
			return task
		})
		props.update(tasks)
	}

	return (
		<>

			<div className="registered">
				<div className="controls">
					<Button action={editar} type="edit" label="Editar" />
					<div class="gap-left">
						<Button action={remover} type="remove" label="Remover" />
					</div>
					<div className="gap-left">
						<Button action={concluir} type="done" label="Concluir" />
					</div>
				</div>
				<h1>TAREFAS CADASTRADAS</h1>

			<ul>
				{props?.data?.map((item) => (
					<li key={item.id} className={item.done ? "done" : ""}>
						<input
							type="checkbox"
							id={item.id}
							onClick={(event) => select(event, item.id)}
						/>
						{item.description}
					</li>
				))}
			</ul>
			</div>
		</>
	)
}
export default Tasks
