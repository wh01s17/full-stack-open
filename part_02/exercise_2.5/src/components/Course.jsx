const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {
                parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
            }
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <h4>
            total of {total} exercises
        </h4>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course